import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FormInputPropsModel {
  label: String;
  inputType: string;
  inputId: string;
  autoComplete: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  formField: string;
}

export const FormInput = ({
  label,
  inputType,
  inputId,
  autoComplete,
  register,
  errors,
  formField,
}: FormInputPropsModel) => {
  return (
    <div>
      {' '}
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          id={inputId}
          type={inputType}
          autoComplete={autoComplete}
          required
          className={
            errors[formField]
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400  sm:text-sm'
              : 'focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400  sm:text-sm'
          }
          {...register(formField)}
        />
        {errors[formField] && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faTriangleExclamation} className="h-5 w-5 text-red-500" />
          </div>
        )}
      </div>
      {errors[formField] && <p className="mt-2 text-sm text-red-600">{errors[formField]?.message as string}</p>}
    </div>
  );
};
