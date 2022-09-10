import React from 'react';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'reactfire';
import * as yup from 'yup';
import gravatarUrl from 'gravatar-url';
import { FormInput } from '../components/FormInput';
import { Alink } from '../components/Alink';
import { ButtonIcon } from '../components/ButtonIcon';
import { Button } from '../components/Button';

type RegisterData = {
  email: string;
  password: string;
  displayName: string;
};
const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .min(8, 'Password must be at least 8 characters long')
      .test(
        'password',
        'Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character',
        value => [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(pattern => pattern.test(value ?? ''))
      ),
    displayName: yup.string().required(),
  })
  .required();

export const Register = () => {
  const auth = useAuth();
  let navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<RegisterData> = data =>
    registerWithPassword(data.email, data.password, data.displayName);

  const registerWithPassword = (email: string, password: string, displayName: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        updateProfile(userCredential.user, {
          photoURL: gravatarUrl(email),
          displayName,
        });
        navigate('/');
        return true;
      })
      .catch(error => {
        setServerError(error.message);
      });
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
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Register</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or <Alink to="/login">sign-in</Alink>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              autoComplete="name"
              inputId="displayName"
              inputType="text"
              errors={errors}
              formField="displayName"
              label="Name"
              register={register}></FormInput>
            <FormInput
              autoComplete="email"
              inputId="email"
              inputType="email"
              errors={errors}
              formField="email"
              label="Email address"
              register={register}></FormInput>
            <FormInput
              autoComplete="new-password"
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
            <div>
              <Button label="Register" type="submit"></Button>
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

            <div className="mt-6 grid grid-cols-3 gap-3">
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
