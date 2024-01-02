import milk from "./utils/milk.gif";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [position, setPosition] = useState({ top: "66.9%", left: "54%" });

  const handleHover = (isHovering) => {
    if (isHovering) {
      const newX = Math.random() * 80; // Random X coordinate (0% to 80%)
      const newY = Math.random() * 80; // Random Y coordinate (0% to 80%)

      setPosition({ top: `${newY}%`, left: `${newX}%` });
    }
    // Keep the initial state if not hovering
  };

  return (
    <div className=" h-screen flex justify-center flex-col bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 ">
      <h1 className="text-5xl text-center text-white ">
        Do you wanna go out with me?
      </h1>
      <div className="flex justify-center">
        <img className="w-60 justify-center m-2" src={milk} alt="" />
      </div>
      <div className="p-4 flex justify-center">
        <Link to="/yes" > 
        <button
          className="rounded bg-green-500 text-white  w-20 p-1 m-1 border border-white focus:outline-none focus:shadow-outline 
        active:bg-white active:text-green-500  font-bold first-letter:transition-all duration-150"
        >
          Yes
        </button>
        </Link>
        <button
          style={position}
          className="rounded absolute transform transition-all duration-300 bg-red-500 text-white  w-20 p-1 m-1 border border-white font-bold"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          
          No
        </button>
      </div>
    </div>
  );
};

export default Home;
