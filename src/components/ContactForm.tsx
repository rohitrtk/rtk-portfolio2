import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

import { Button, Textarea } from "@material-tailwind/react";

export interface FormInputs {
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInputs>();

  const [disabled, setDisabled] = useState(false);

  const sendMessage = async ({ message }: FormInputs) => {
    const { status } = await fetch("./.netlify/functions/send-message", {
      method: "POST",
      body: JSON.stringify({
        message
      })
    });

    if (status !== 200) {
      throw new Error(`Error ${status} occured while sending message.`);
    }

    reset();
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    if (disabled) return;

    await toast.promise(
      sendMessage(data),
      {
        loading: <p>Sending message...</p>,
        success: <b>Message sent!</b>,
        error: <b>An error occured. Please try again or contact me directly.</b>
      },
      {
        style: {
          minWidth: "100px"
        },
        success: {
          duration: 20000
        },
        error: {
          duration: 8000
        }
      }
    );

    setDisabled(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
      <div className="block">
        <Textarea
          className="w-full h-full font-body rounded-lg text-black"
          error={errors.message ? true : false}
          rows={4}
          label="Leave a message..."
          {...register("message", {
            required: "Required",
            minLength: {
              value: 3,
              message: "4 characters minimum"
            },
            maxLength: {
              value: 2500,
              message: "2500 characters maximum"
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
        <Button
          disabled={disabled}
          type="submit"
          className="w-1/4 m-2 p-2 bg-transparent rounded-md shadow-none hover:shadow-none hover:bg-neutral-700">
          <p className="font-body text-blue-gray-400 capitalize text-xl">
            Send
          </p>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
