import React, { useState } from "react";
import Header from "../../Header";
import { ArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
// import Fade from "react-reveal";
import { RoughNotation } from "react-rough-notation";
import axios from "axios";


const App = () => {
  const [Values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (Values.name === "" || Values.email === "" || Values.message === "") {
      alert("Please fill all the fields 😒");
    } else {
      // const port = process.env.REACT_APP_PORT;
      await axios.post("http://localhost:2000/api/v1/post", Values).then((res) => {
        alert("Thank You!")
      });
      setValues({
        name: "",
        email: "",
        message: "",
      });
    }
    setLoading(false);
  };
  

  return (
    <>
      <div className="text-black h-auto">
        <Header />
        <div className="border-b pb-[6rem] max-w-7xl mx-auto py-[2rem] mt-[1rem] mb-[4rem] px-5 flex lg:items-center justify-center flex-col lg:flex-row lg:gap-[10rem] gap-[2rem]">
          {/* <Fade bottom> */}
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
              <a href="mailto:riteshky19@gmail.com">
                <button className="p-[1rem] rounded-2xl bg-[#131920] flex items-center gap-3">
                  <EnvelopeIcon className="h-10 bg-green-400 p-2 rounded-full" />
                  <span className="font-bold text-white">
                    riteshky19@gmail.com
                  </span>
                </button>
              </a>
            </div>
          {/* </Fade>
          <Fade bottom> */}
            <form
              onSubmit={submit}
              className="w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-5 "
            >
              <input
                type="text"
                placeholder="Your name"
                className="input-form"
                name="name"
                value={Values.name}
                onChange={change}
              />

              <input
                type="email"
                placeholder="Your email"
                className="input-form"
                name="email"
                value={Values.email}
                onChange={change}
              />

              <textarea
                placeholder="Message"
                className="input-form max-w-full h-[150px] sm:col-span-2"
                name="message"
                value={Values.message}
                onChange={change}
              />
              <button
                type="submit"
                onClick={(e) => {
                submit(e);
              }}className={`bg-gray-400' : 'bg-black h-[45px] flex items-center justify-center gap-2 duration-200 transition-all hover:bg-[#0a0a0a] ${
                  loading ? "bg-gray-800 opacity-60" : "bg-black"} text-white rounded-md`}
                  disabled={loading}
                  >
                    <span>{loading ? "Message Sending..." : "Send"}</span>{" "}
                    <ArrowUpRightIcon className="h-5 text-white" />
                    </button>

            </form>
          {/* </Fade> */}
        </div>
      </div>
    </>
  );
};

export default App;
