import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'reactfire';
import * as yup from 'yup';
import { FormInput } from '../components/FormInput';

import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Alink } from '../components/Alink';
import { Button } from '../components/Button';
import { ButtonIcon } from '../components/ButtonIcon';

type LoginData = {
  email: string;
  password: string;
};
const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

export const Login = () => {
  const auth = useAuth();
  let navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await navigate('/');
    } catch (error: any) {
      setServerError(error.message);
    }
  };
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      await navigate('/');
    } catch (error: any) {
      setServerError(error.message);
    }
  };
  const githubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      await navigate('/');
    } catch (error: any) {
      setServerError(error.message);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<LoginData> = data => signIn(data.email, data.password);

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or <Alink to="/register">register</Alink>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              autoComplete="email"
              inputId="email"
              inputType="email"
              errors={errors}
              formField="email"
              label="Email address"
              register={register}></FormInput>
            <FormInput
              autoComplete="current-password"
              inputId="password"
              inputType="password"
              errors={errors}
              formField="password"
              label="Password"
              register={register}></FormInput>

            {serverError && (
              <p className="mt-2 text-sm text-red-600" id="server-error">
                {serverError}
              </p>
            )}

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Alink to="password-lost">Forgot your password</Alink>
              </div>
            </div>

            <div>
              <Button label="Sign in" type="submit"></Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <ButtonIcon onClick={googleLogin} icon={faGoogle}></ButtonIcon>
              </div>
              <div>
                <ButtonIcon onClick={githubLogin} icon={faGithub}></ButtonIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
