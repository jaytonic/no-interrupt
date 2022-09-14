import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import Toggle from 'react-toggle';
import { useAuth, useFirestore, useFirestoreDocData } from 'reactfire';
import * as yup from 'yup';
import { Button } from '../components/Button';
import { FormInput } from '../components/FormInput';
import { Switch } from '../components/Switch';
import { TextArea } from '../components/TextArea';
import { Title } from '../components/Title';

type ConfigureData = {
  title: string;
  description: string;
  startHour: number;
  endHour: number;
  isWorkingMonday: boolean;
  isWorkingTuesday: boolean;
  isWorkingWednesday: boolean;
  isWorkingThursday: boolean;
  isWorkingFriday: boolean;
  isWorkingSaturday: boolean;
  isWorkingSunday: boolean;
};
const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

export const Configure = () => {
  const auth = useAuth();
  const [serverError, setServerError] = useState<string | null>(null);
  const firestore = useFirestore();
  const ref = doc(firestore, 'queues', auth.currentUser?.uid ?? '');
  const { status, data } = useFirestoreDocData(ref);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConfigureData>({ resolver: yupResolver(schema), defaultValues: { isWorkingMonday: true } });
  const onSubmit: SubmitHandler<ConfigureData> = updatedData => {
    try {
      if (data === undefined) {
        setDoc(ref, updatedData);
      } else {
        updateDoc(ref, updatedData);
      }
    } catch (ex: any) {
      setServerError(ex.message);
    }
  };

  useEffect(() => {
    if (data === undefined) {
      const startInfo: ConfigureData = {
        title: 'Your wonderful new queue',
        description: 'Some welcome message for your customers',
        startHour: 8,
        endHour: 16,
        isWorkingMonday: true,
        isWorkingTuesday: true,
        isWorkingWednesday: true,
        isWorkingThursday: true,
        isWorkingFriday: true,
        isWorkingSaturday: false,
        isWorkingSunday: false,
      };
      reset(startInfo);
    }
  }, [data, reset]);
  if (status === 'loading') {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Title title="Configure your tickets queue"></Title>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          errors={errors}
          inputId="title"
          inputType="text"
          label="Title"
          formField="title"
          register={register}></FormInput>
        <TextArea
          errors={errors}
          inputId="description"
          label="Description"
          formField="description"
          register={register}></TextArea>
        <h3 className=" text-sm font-medium text-gray-700 mt-6">Working days</h3>
        <div className="grid grid-cols-7 gap-3 justify-items-center">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <div className="flex flex-col content-center items-center" key={day}>
              <span>{day}</span>
              <Switch control={control} formField={'isWorking' + day}></Switch>
            </div>
          ))}
        </div>
        {serverError && (
          <p className="mt-2 text-sm text-red-600" id="server-error">
            {serverError}
          </p>
        )}
        <Button label="Save" type="submit"></Button>
      </form>
    </div>
  );
};
