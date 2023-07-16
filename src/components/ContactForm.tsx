import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

import { Button, Textarea, Typography } from "@material-tailwind/react";

export type ContactFormInputs = {
  message: string;
};

const minCharacters = 3;
const maxCharacters = 2500;

const messageOptions = {
  required: "Required",
  minLength: {
    value: minCharacters,
    message: `Please use at least ${minCharacters + 1} characters!`
  },
  maxLength: {
    value: maxCharacters,
    message: `Please use a minimum of ${maxCharacters} characters!`
  }
};

export default function ContactForm() {
  const [sendDisabled, setSendDisabled] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormInputs>();

  const sendMessage = async () => {};

  const onSubmit = () => {
    if (sendDisabled) {
      return;
    }
  };

  const { onChange, onBlur, name, ref } = register("message", messageOptions);

  return (
    <form
      className="flex flex-col gap-4 w-full h-full"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center">
        <textarea
          className={`w-full h-full rounded-none font-primary p-1 text-black bg-white resize-none shadow-sm
            ${
              errors.message ? "border-2 border-red-700" : ""
            } focus:border-dt-orange focus:border-2 focus:!outline-none`}
          rows={4}
          onBlur={onBlur}
          name={name}
          ref={ref}
          onChange={({ target, type }) => {
            setCharacterCount(target.value.length);
            onChange({ target, type });
          }}
        />
        <div className="w-full flex justify-end">
          <Typography
            className={`font-primary ${
              characterCount > maxCharacters
                ? "text-red-700 font-bold"
                : "text-dt-light-blue"
            }`}
            variant="small">
            {characterCount}/{maxCharacters} Characters
          </Typography>
        </div>
        {errors.message ? (
          <Typography className="font-primary text-red-700">
            {errors.message.message}
          </Typography>
        ) : (
          <></>
        )}
      </div>

      <div className="flex justify-center items-center">
        <Button
          disabled={sendDisabled}
          type="submit"
          className="w-1/4 m-2 p-2 shadow-sm hover:shadow-none bg-dt-grey text-dt-blue border border-dt-blue hover:border-dt-orange hover:text-dt-orange">
          <Typography className="font-primary capitalize">Send</Typography>
        </Button>
      </div>
    </form>
  );
}

interface FormInputs2 {
  message: string;
}

export const ContactForm2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormInputs>();

  const [disabled, setDisabled] = useState(false);

  const sendMessage = async ({ message }: ContactFormInputs) => {
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

  const onSubmit: SubmitHandler<ContactFormInputs> = async (
    data: ContactFormInputs
  ) => {
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
          className="w-full h-full font-primary rounded-lg text-black"
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
          <p role="alert" className="font-primary text-red-800">
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
          className="w-1/4 m-2 p-2 bg-transparent rounded-md shadow-none hover:shadow-none hover:bg-neutral-700 bg-neutral-900">
          <p className="font-primary text-blue-gray-400 capitalize text-xl">
            Send
          </p>
        </Button>
      </div>
    </form>
  );
};
