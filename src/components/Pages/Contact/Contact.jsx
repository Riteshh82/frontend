import React, { useState } from "react";
import Header from "../../Header";
import { ArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Fade from "react-reveal";
import { RoughNotation } from "react-rough-notation";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const contactHandler = (e) => {
    e.preventDefault();

    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Message :", message);
  };



  return (
    <>
      <div className="text-black h-auto">
        <Header />
        <div className="border-b pb-[6rem] max-w-7xl mx-auto py-[2rem] mt-[1rem] mb-[4rem] px-5 flex lg:items-center justify-center flex-col lg:flex-row lg:gap-[10rem] gap-[2rem]">
          <Fade bottom>
            <div className="max-w-[400px]">
              <RoughNotation
                show="underline"
                animationDelay={400}
                animationDuration={500}
                className="text-[2.5rem] font-bold"
              >
                Get in touch
              </RoughNotation>
              <p className="py-5">
                I'm always curious to hear about collaboration opportunities.
                Let's get in touch!
              </p>
              <a href="mailto:riteshky@19`@gmail.com">
                <button className="p-[1rem] rounded-2xl bg-[#131920] flex items-center gap-3">
                  <EnvelopeIcon className="h-10 bg-green-400 p-2 rounded-full" />
                  <span className="font-bold text-white">
                    riteshky19@gmail.com
                  </span>
                </button>
              </a>
            </div>
          </Fade>
          <Fade bottom>
            <form className="w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <input
                type="text"
                placeholder="Your name"
                className="input-form"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Your email"
                className="input-form"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                placeholder="Message"
                className="input-form max-w-full h-[150px] sm:col-span-2"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                onClick={(e) => contactHandler(e)}
                className={`bg-gray-400' : 'bg-black h-[45px] flex items-center justify-center gap-2 duration-200 transition-all hover:bg-zinc-800 rounded-md ${
                  loading ? "bg-gray-800 opacity-60" : "bg-black"
                } text-white`}
              >
                <span>{loading ? "Message Sended" : "Just Send"}</span>{" "}
                <ArrowUpRightIcon className="h-5 text-white" />
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Contact;

