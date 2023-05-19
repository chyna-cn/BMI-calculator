import { useState } from "react";
import React from "react";
 const Content = ()=>{
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);

  const onWeightChange = (event)=>{
   const weightValue = event.target.value;
    setWeight(weightValue);
  };

  const onHeightChange =(event)=>{
   const heightValue = event.target.value;
    setHeight(heightValue);
  };

  const output = ()=>{
    const heightConversion = height/100;
    const convertedHeight = heightConversion * heightConversion;
    const calculation = weight/convertedHeight;
    return calculation.toFixed(2);
  }

    return(
        <div className="pt-20" >
          <div className="bg-royalBlue border border-royalBlue w-4/5 mx-auto h-16 px-3 lg:h-20">
            <h1 className="text-center text-white pt-4  font-bold text-xl scale-x-95 lg:pt-6 lg:text-4xl">Project 7: BMI CALCULATOR</h1>
        
          </div>

          <div className="bg-white border w-4/5 h-80 mx-auto">
            <div className="ml-12 mr-12 mt-6 lg:ml-72">
            <p>Weight: {weight} kg</p>
            <input type= 'range' min = '0' max='200' step = '1' value={weight} className="w-full lg:w-2/3 " onChange={onWeightChange}/>
            </div>

            <div className="ml-12 mr-12 mt-6 lg:ml-72">
            <p>Height: {height} cm</p>
            <input type= 'range' min = '0' max = '200' step = '1' value={height} className="w-full lg:w-2/3" onChange={onHeightChange}/>
            </div>

            <div className="bg-royalBlue text-white border rounded-full w-20 h-11 items-center text-center mx-auto mt-16">
             <p className="mt-2">{output()}</p>
            </div>
          </div>
        </div>
    )
 }
 export default Content
