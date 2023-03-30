import { a } from "@react-spring/web";

import { useFade } from "@hooks/useFade";

import ContactForm from "@components/ContactForm/ContactForm";

const Contact = () => {
  const [ref, style] = useFade();

  return (
    <a.div ref={ref} style={style}>
      <div className="p-10 flex flex-row justify-between -z-20">
        <h1 className="text-6xl font-text">Contact</h1>
      </div>
      <div className="p-2 justify-center align-middle container mx-auto -z-20">
        <ContactForm />
      </div>
    </a.div>
  );
};

export default Contact;
