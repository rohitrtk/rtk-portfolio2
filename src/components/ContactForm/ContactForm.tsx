import { useForm, SubmitHandler } from "react-hook-form";

import ContactFormInput, { ContactFormTextArea } from "./ContactFormInput.js";

export interface FormInputs {
  name: string;
  emailAddress: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="w-1/2 flex flex-row gap-4">
        <ContactFormInput
          name="name"
          placeholder="Name"
          register={register}
          errors={errors}
          registerOptions={{
            required: "Required",
            minLength: {
              value: 3,
              message: "4 characters minimum"
            },
            maxLength: {
              value: 40,
              message: "40 characters maximum"
            }
          }}
        />

        <ContactFormInput
          name="name"
          placeholder="Name"
          register={register}
          errors={errors}
          registerOptions={{
            required: "Required",
            minLength: {
              value: 3,
              message: "4 characters minimum"
            },
            maxLength: {
              value: 40,
              message: "40 characters maximum"
            },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid"
            }
          }}
        />
      </div>

      <ContactFormTextArea
        name="message"
        placeholder="Leave a message..."
        register={register}
        errors={errors}
        registerOptions={{
          required: "Required",
          minLength: {
            value: 3,
            message: "4 characters minimum"
          },
          maxLength: {
            value: 200,
            message: "200 characters maximum"
          }
        }}
      />
      <div className="justify-center flex flex-row">
        <button
          type="submit"
          className="font-text w-1/4 m-2 p-2 bg-neutral-800 rounded-md">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
