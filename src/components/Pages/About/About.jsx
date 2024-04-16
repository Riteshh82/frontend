import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from '../../Header'
import { Fade } from 'react-awesome-reveal';
import { RoughNotation } from "react-rough-notation";

function About() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch ('https://api.github.com/users/riteshh82')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      });
  }, [])

  return (
   <>
    <Header/>
    <Fade direction="up" duration={1000}>
      <div className="py-[2rem] mt-[1rem] mb-[1rem] px-5 flex   lg:items-center justify-center">
        <RoughNotation
          show="underline"
          animationDelay={400}
          animationDuration={500}
          className="text-[2.5rem] font-bold"
        >
          About Me
        </RoughNotation>
      </div>
    </Fade>
    
    <div className="text-black h-auto">
      <div className="border-b pb-[6rem] max-w-6xl mx-auto py-[2rem] mt-[1rem] mb-[4rem] px-5 flex lg:items-center justify-center flex-col lg:flex-row lg:gap-[10rem] gap-[2rem]">
        <Fade direction="up" duration={1000}>
          <div className="mx-auto border-black rounded-md">
            <img
              src={data.avatar_url}
              alt="riteshh82"
              className="rounded-md mx-auto"
            />
          </div>
          <div className="w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1080px] ">
            <div>
              <h1 className="font-bold">Experience 🎖️</h1>
              <p>1+ Years</p>
            </div>
            <div>
              <h1 className="font-bold">Student At 👨🏼‍💻</h1>
              <p>Parul University</p>
            </div>
            <div className="col-span-2">
              <p>
                I'm a versatile web developer skilled in frontend (JavaScript, Tailwind
                CSS, HTML5) and backend (Node.js, Express). Proficient in SQL and
                MongoDB, I create responsive, performance-optimized websites.
                Experienced with Git, I excel in collaborative environments with
                strong communication and problem-solving abilities.
              </p>
            </div>
            <Link to="https://drive.google.com/file/d/1hRkTZ0bSZ0ockpAa2yaWajriBoL-wLXT/view?usp=share_link" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Resume Page" title="Resume Page">
              <button className="py-2 px-4 mr-20 rounded-lg bg-zinc-900 hover:bg-zinc-800 gap-3">
                <span className="font-bold text-white">
                  Resume
                </span>
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
   </>
  )
}

export default About;
