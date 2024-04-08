import React from 'react'
import Header from '../../Header';
import Fade from "react-reveal";


function Project() {
  return (
   <>
    <Header/>
    <div className="text-black h-auto">
        <div className="border-b pb-[6rem] max-w-7xl mx-auto py-[2rem] mt-[1rem] mb-[4rem] px-5 flex lg:items-center justify-center flex-col lg:flex-row lg:gap-[10rem] gap-[2rem]">
        <Fade bottom>
            <div className="max-w-[400px]">
             <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi, quod delectus dolores velit sed est eius obcaecati ea rerum aliquam? Consequatur ullam ut provident veniam laudantium quas repudiandae illo!</h1>
            </div>

            <div className="max-w-[400px]">
             <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor labore nam amet nihil. Expedita, inventore ea cum maxime quasi molestias eum fugiat quo saepe qui officia dolor, aperiam porro!</h1>
            </div>

            <div className="max-w-[400px]">
             <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi, quod delectus dolores velit sed est eius obcaecati ea rerum aliquam? Consequatur ullam ut provident veniam laudantium quas repudiandae illo!</h1>
            </div>

            <div className="max-w-[400px]">
             <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor labore nam amet nihil. Expedita, inventore ea cum maxime quasi molestias eum fugiat quo saepe qui officia dolor, aperiam porro!</h1>
            </div>
          </Fade>
        </div>
      </div>
   </>
  )
}

export default Project;

