import { useForm, SubmitHandler } from "react-hook-form";

import { ContactFormTextArea } from "./ContactFormInput.js";
import { toast } from "react-hot-toast";

export interface FormInputs {
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>();

  const sendMessage = async () => {
    return true;
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    toast.promise(sendMessage(), {
      loading: "Sending message...",
      success: <b>Message sent!</b>,
      error: <b>Error sending message!</b>
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
      <div className="block">
        <textarea
          className="w-full h-full font-body rounded-lg text-black"
          rows={4}
          placeholder="Leave a message..."
          {...register("message", {
            required: "Required",
            minLength: {
              value: 3,
              message: "4 characters minimum"
            },
            maxLength: {
              value: 200,
              message: "200 characters maximum"
            }
          })}
        />
        {errors.message ? (
          <p role="alert" className="font-body text-red-800">
            {errors.message?.message}
          </p>
        ) : (
          <></>
        )}
      </div>

      <div className="justify-center flex flex-row">
        <button
          type="submit"
          className="font-body w-1/4 m-2 p-2 bg-neutral-800 rounded-md">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
