import Stripe from "@components/Stripe";

const Error = () => {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col bg-neutral-900 items-center justify-center sticky top-0 overflow-hidden gap-2">
      <Stripe />
      <div className="justify-center items-center text-center">
        <div className="flex flex-col shadow-xl rounded-xl p-5 font-body text-xl md:text-3xl gap-2">
          <p>The page you requested does not exist!</p>
          <a href="/" className="hover:text-neutral-300 text-md md:text-xl">
            Return home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
