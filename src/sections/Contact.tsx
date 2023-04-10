import { a } from "@react-spring/web";

import { useFade } from "@hooks/useFade";

import ContactForm from "@components/ContactForm/ContactForm";

const Contact = () => {
  const [ref, style] = useFade();

  return (
    <a.div ref={ref} style={style} className="flex flex-col p-10">
      <div className="flex flex-row justify-between -z-20">
        <h1 className="text-6xl font-text">Contact</h1>
      </div>
      <div className="flex flex-row w-full justify-center">
        <div className="flex flex-col justify-center align-middle md:w-1/2 text-center">
          <p className="text-xl font-text">
            Send me a message if you'd like to get in touch, and I'll get back
            to you as soon as I can!
          </p>
          <div className="justify-center align-middle container mx-auto z-40">
            <ContactForm />
          </div>
        </div>
      </div>
    </a.div>
  );
};

export default Contact;
