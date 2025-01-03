// import { useRef } from "react";

const ContactMe = () => {


  // const nameRef = useRef(null);
  // const emailRef = useRef(null);
  // const messageRef = useRef(null);

  return (
    <section id="contact" className="w-full flex  justify-center scroll-mt-[76px] ">
      <div className="bg-green-100 max-w-4xl w-full p-6 rounded-2xl">
        <h1 className=" text-2xl sm:text-6xl font-bold ">
          Love to hear from you, <br />
          Get in touch 👋
        </h1>
        <form action="/" className="mt-6 flex flex-col gap-3">
          <div className="flex flex-col sm-flex-row gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-sm" htmlFor="name">
                {" "}
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="px-4 py-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-sm" htmlFor="email">
                {" "}
                Your email
              </label>
              <input
                type="text"
                id="email"
                placeholder="example@example.com"
                className="px-4 py-2 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
          <label className="text-sm" htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={10}  className="p-4 outline-none resize-none" ></textarea>
          </div>
          <button className="px-4 py-2 bg-green-900 sm:w-60 text-white w-full">Just Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
