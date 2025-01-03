import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { serviceId, templateId, publicKey } from "../../.config";
import { toast } from "react-toastify";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      user_name: nameRef.current.value, // Matches {{user_name}}
      user_email: emailRef.current.value, // Matches {{user_email}}
      to_name: "Hrishikesh Kalita", // Matches {{to_name}}
      message: messageRef.current.value, // Matches {{message}}
      reply_to: emailRef.current.value, // Matches {{reply_to}}
    };

    emailjs
      .send(
        serviceId, // Replace with your EmailJS Service ID
        templateId, // Replace with your EmailJS Template ID
        templateParams,
        publicKey // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setSendSuccess(true);
          toast.success("🎉 Message sent successfully!");
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  if (sendSuccess) {
    setTimeout(() => {
      setSendSuccess(false);
    }, 3000);

    return (
      <div className="bg-green-100 max-w-4xl w-full p-6 rounded-2xl">
        <h1 className="text-2xl sm:text-5xl text-center">
          {" "}
          Message sent successfully!{" "}
        </h1>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className=" w-full flex justify-center scroll-mt-[76px]"
    >
      <div className="bg-green-100 max-w-4xl w-full p-6 rounded-2xl">
        {!loading ? (
          <>
            <h1 className="text-2xl sm:text-5xl ">
              Love to hear from you, <br />
              Get in touch 👋
            </h1>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
              <div className="flex flex-col sm-flex-row gap-4">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm" htmlFor="name">
                    Your name
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="px-4 py-2 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm" htmlFor="email">
                    Your email
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    className="px-4 py-2 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm" htmlFor="message">
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  placeholder="your message"
                  id="message"
                  rows={5}
                  className="p-4 outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-green-900 sm:w-60 text-white w-full"
              >
                Just Send
              </button>
            </form>
          </>
        ) : (
          <h1 className="text-2xl sm:text-5xl animate-pulse text-center">
            {" "}
            Sending your message{" "}
          </h1>
        )}
        {sendSuccess && (
          <h1 className="text-2xl sm:text-5xl text-center">
            {" "}
            Message sent successfully!{" "}
          </h1>
        )}
      </div>
    </section>
  );
};

export default ContactMe;
