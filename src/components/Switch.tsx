import { Control, Controller } from 'react-hook-form';
import Toggle from 'react-toggle';

export interface SwitchProps {
  control: Control<any, any>;
  formField: string;
}

export const Switch = ({ control, formField }: SwitchProps) => {
  return (
    <Controller
      control={control}
      name={formField}
      render={({ field: { value, onChange } }) => <Toggle icons={false} checked={value} onChange={onChange} />}
    />
  );
};
