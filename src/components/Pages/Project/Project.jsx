import React from 'react'
import Header from '../../Header';
import Fade from "react-reveal";
import Card from '../../Card';


function Project() {
  return (
   <>
    <Header/>
    <div className="text-black h-auto">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <Fade bottom>
        <div className="flex justify-center items-center bg-gray-200 ">
      {/* <Card 
        title="" 
        imageUrl="" 
        link="https://travelwithus.vercel.app"
      />
    </div>

    <div className="flex justify-center items-center  bg-gray-200">
      <Card 
        title="TOurs and trasvels" 
        imageUrl="" 
        link="#"
      />
    </div>
    <div className="flex justify-center items-center  bg-gray-200">
      <Card 
        title="Project 1" 
        imageUrl="https://via.placeholder.com/300" 
        link="#"
      />
    </div>
    <div className="flex justify-center items-center  bg-gray-200">
      <Card 
        title="Project 1" 
        imageUrl="https://via.placeholder.com/300" 
        link="#"
      /> */}
    </div>
    

    
    

            
          </Fade>
        </div>
      </div>
   </>
  )
}

export default Project;

