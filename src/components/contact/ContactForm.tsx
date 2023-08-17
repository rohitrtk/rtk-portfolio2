import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { Button, Typography } from "@material-tailwind/react";

type ContactFormInputs = {
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

  const sendMessage = async ({ message }: ContactFormInputs) => {
    const { status } = await fetch("/.netlify/functions/send-message", {
      method: "POST",
      body: JSON.stringify({
        message
      })
    });

    if (status !== 200) {
      throw new Error("Oops! Something went wrong.");
    } else {
      reset();
      setCharacterCount(0);
    }
  };

  const onSubmit: SubmitHandler<ContactFormInputs> = (
    data: ContactFormInputs
  ) => {
    if (sendDisabled) {
      return;
    }
    setSendDisabled(true);

    toast.promise(() => sendMessage(data), {
      pending: "Sending message...",
      success: "Message sent!",
      error: "Oops, something went wrong."
    });
    setSendDisabled(false);
  };

  const { onChange, onBlur, name, ref } = register("message", messageOptions);

  return (
    <form
      className="flex flex-col gap-4 w-full h-full "
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
