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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="w-1/2 flex flex-row">
        <input
          id="name"
          type="text"
          className="bg-neutral-900 text-white rounded-lg"
          placeholder="Name"
        />

        <input
          id="emailAddress"
          type="text"
          className="bg-neutral-900 text-white rounded-lg"
          placeholder="Email Address"
        />
      </div>
      <div>
        <textarea id="message" rows={4} />
      </div>
    </form>
  );
};

export default ContactForm;
