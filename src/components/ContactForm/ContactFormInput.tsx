import type {
  UseFormRegister,
  FieldErrors,
  RegisterOptions
} from "react-hook-form";

import type { FormInputs } from "@components/ContactForm/ContactForm.js";

interface Props {
  name: keyof FormInputs;
  placeholder: string;
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  registerOptions: RegisterOptions<FormInputs>;
}

const ContactFormInput = ({
  name,
  placeholder,
  register,
  errors,
  registerOptions
}: Props) => {
  return (
    <div className="flex flex-col">
      <input
        className="bg-neutral-900 text-gray-400 font-body border-x-0 border-t-0 focus:ring-0 divide-none"
        placeholder={placeholder}
        {...register(name, {
          ...registerOptions
        })}
      />
      {errors[name] ? (
        <p role="alert" className="font-body text-red-600">
          {errors[name]?.message}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContactFormInput;

export const ContactFormTextArea = ({
  name,
  placeholder,
  register,
  errors,
  registerOptions
}: Props) => {
  return (
    <div className="block">
      <textarea
        className="w-full h-full font-body"
        rows={4}
        placeholder={placeholder}
        {...register(name, { ...registerOptions })}
      />
      {errors[name] ? (
        <p role="alert" className="font-body text-red-800">
          {errors[name]?.message}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
