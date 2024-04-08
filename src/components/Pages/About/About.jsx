// import React from 'react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from '../../Header'
import Fade from "react-reveal";
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
      })
    
  }, [])
  return (
   <>
    <Header/>
    <Fade bottom>
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
        <div className="border-b pb-[6rem] max-w-7xl mx-auto py-[2rem] mt-[1rem] mb-[4rem] px-5 flex lg:items-center justify-center flex-col lg:flex-row lg:gap-[10rem] gap-[2rem]">
      

           <Fade bottom>
           
           <div className="w-21 h-21 border-black border rounded-md">
      
            <img
              src={data.avatar_url}
              alt="riteshh82"
              className="rounded-md"
            />
          </div>
          <div className="w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-5 ">
           
              <div>
                <h1 className="font-bold">Experince</h1>
                <p>1+ Years</p>
              </div>

              <div>
                <h1 className="font-bold">Achivement</h1>
                <p>1+ Years</p>
              </div>

              <div className="col-span-2"><p>I'm a versatile web developer skilled in frontend (JavaScript, Tailwind
                CSS, HTML5) and backend (Node.js, Express). Proficient in SQL and
                MongoDB, I create responsive, performance-optimized websites.
                Experienced with Git, I excel in collaborative environments with
                strong communication and problem-solving abilities.</p>
              </div>

              <button className="py-2 px-4 mr-20 rounded-3xl bg-zinc-900 hover:bg-zinc-800 gap-3">
                  <span className="font-bold text-white">
                  Resume
                  </span>
                </button>
              </div>
             

           </Fade>
        
        </div>

        
      </div>
   </>
  )
}

export default About
