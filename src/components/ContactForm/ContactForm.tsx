import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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

  const [disabled, setDisabled] = useState(false);

  const sendMessage = async ({ message }: FormInputs) => {
    const { status } = await fetch("./.netlify/functions/send-message", {
      method: "POST",
      body: JSON.stringify({
        message
      })
    });

    return status === 200;
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    if (disabled) return;

    await toast.promise(sendMessage(data), {
      loading: "Sending message...",
      success: <b>Message sent!</b>,
      error: <b>An error occured. Please try again or contact me directly.</b>
    });

    setDisabled(false);
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
          disabled={disabled}
          type="submit"
          className="font-body w-1/4 m-2 p-2 bg-neutral-800 rounded-md">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
