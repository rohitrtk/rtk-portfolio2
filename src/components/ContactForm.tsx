import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  emailAddress: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="w-1/2 flex flex-row gap-4">
        <div className="flex flex-col">
          <input
            className="bg-neutral-900 text-gray-400 font-text border-x-0 border-t-0 focus:ring-0 divide-none"
            placeholder="Name"
            {...register("name", {
              required: "Required",
              minLength: {
                value: 3,
                message: "4 characters minimum"
              },
              maxLength: {
                value: 40,
                message: "40 characters maximum"
              }
            })}
          />
          {errors.name ? (
            <p role="alert" className="font-text text-red-800">
              {errors.name.message}
            </p>
          ) : (
            <></>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="bg-neutral-900 text-gray-400 font-text border-x-0 border-t-0 focus:ring-0 divide-none"
            placeholder="Email Address"
            {...register("emailAddress", {
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
            })}
          />
          {errors.emailAddress ? (
            <p role="alert" className="font-text text-red-800">
              {errors.emailAddress.message}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="block">
        <textarea
          className="w-full h-full font-text"
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
          <p role="alert" className="font-text text-red-800">
            {errors.message.message}
          </p>
        ) : (
          <></>
        )}
      </div>
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
