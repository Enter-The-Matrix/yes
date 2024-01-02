import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import cute from "./utils/cute.gif";
const Yesss = () => {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className="h-screen flex justify-center flex-col bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-5xl text-center text-white ">Yeeyyyyy! Finally </h1>
      <div className="flex justify-center">
        <img className="w-60 justify-center " src={cute} alt="" />
      </div>
      <div className=" flex justify-center mt-4 ">
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

      </div>
      <div className="p-4 flex justify-center">
        <button
          className="rounded bg-blue-500 text-white  w-40 p-1 m-1 border border-white
       active:bg-white active:text-blue-500 font-bold first-letter:transition-all duration-150
       "
        >
          
          Let's Fix A Date
        </button>
      </div>
      

    </div>
  );
};

export default Yesss;
