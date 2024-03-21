import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Header() {
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
    <header className="max-w-6xl flex items-center sm:p-10 p-5 justify-between mx-auto">
      <Fade top>
        <div className="w-14 h-14 border-black border-2 p-[.8px] rounded-full">
          <Link to='/'>
            <img
              src={data.avatar_url}
              alt="riteshh82"
              className="cursor-pointer rounded-full"
            />
          </Link>
        </div>

        <ul
          className={`${
            toggle ? "mini mini-show" : "mini"
          } flex items-center justify-center gap-10 font-bold text-white`}
        >
          <Link to="/contact">
            <li className="link">Contact</li>
          </Link>

          <Link to="/project">
            <li className="link">Project</li>
          </Link>
        </ul>

        <div className="z-[1100] md:hidden">
          {toggle ? (
            <XMarkIcon
              className={`menu-btn ${toggle ? "text-white" : "text-black"}`}
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <Bars3Icon
              className="menu-btn"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </Fade>
    </header>
  );
}

export default Header
