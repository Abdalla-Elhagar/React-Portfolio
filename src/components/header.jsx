import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";

function Header() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  const [dark, setDark] = useState(false);
  function handleDark() {
    let body = document.querySelector("body");
    dark ? body.classList.add("dark") : body.classList.remove("dark");
    setDark(!dark);
  }

  return (
    <motion.header
    transition={{duration:0.5}} initial id="up" className="border border-drBorder border-y-0">
      <div className="m-auto w-[400px] pt-5">
        <ul className="nav font-semibold max-lg:hidden p-3 rounded-full dark:bg-drBgHeader shadow-lg shadow-[rgb(49 ,48 ,48)] flex justify-center gap-10">
          <li className=" transition-all duration-150 hover:scale-110">
            <a href="#about">About</a>
          </li>
          
          <li className=" transition-all duration-150 hover:scale-110">
            <a href="#projects">Project</a>
          </li>
          <li className=" transition-all duration-150 hover:scale-110">
            <a href="#contact">Speaking</a>
          </li>
          <li className=" transition-all duration-150 hover:scale-110">
            <a href="#footer">Footer</a>
          </li>
        </ul>

        {show && (
          <div className="resposiveNav fixed bg-drBgHeader/90 w-full h-screen left-0 top-0 z-10">
            <motion.button
              transition={{ duration: 0.6 }}
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 270 }}
              onClick={handleShow}
              className="absolute top-[60px] right-[6.5%] hover:text-red-500 text-white z-10"
            >
              <IoIosClose className="size-7" />
            </motion.button>
            <ul className="nav font-semibold p-6 flex flex-col gap-5 rounded-xl absolute w-[90%] left-[5%] top-[50px] dark:bg-drSecondary shadow-lg shadow-[rgb(49 ,48 ,48)]">
              <li className="transition-all text-white duration-150 hover:translate-x-1 hover:text-orange-400 dark:border-b-stone-800 border-b-stone-600 border border-transparent pb-3">
                <a href="#about">About</a>
              </li>

              <li className="transition-all text-white duration-150 hover:translate-x-1 hover:text-orange-400 dark:border-b-stone-800 border-b-stone-600 border border-transparent pb-3">
                <a href="#projects">Project</a>
              </li>
              <li className="transition-all text-white duration-150 hover:translate-x-1 hover:text-orange-400 dark:border-b-stone-800 border-b-stone-600 border border-transparent pb-3">
                <a href="#contact">Speaking</a>
              </li>
              <li className="transition-all text-white duration-150 hover:translate-x-1 hover:text-orange-400">
                <a href="#footer">Footer</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-between px-5">
        <button
          onClick={handleShow}
          className="hover:text-orange-400 rounded-full max-lg:relative max-lg:block hidden absolute size-10 dark:bg-drBgHeader border-2 border-drBorder transition-all duration-300 hover:border-orange-400/30 hover:scale-105"
        >
          <IoMenu className="mx-auto size-5" />
        </button>
        <button
          onClick={handleDark}
          className="hover:text-orange-400 rounded-full max-lg:relative max-lg:right-0 max-lg:top-0 absolute size-10 dark:bg-drBgHeader right-[15%] top-[25px] border-2 border-drBorder transition-all duration-300 hover:border-orange-400/30 hover:scale-105"
        >
          {dark ? (
            <FaRegMoon className="mx-auto size-5" />
          ) : (
            <FaSun className="mx-auto size-5" />
          )}
        </button>
      </div>
    </motion.header>
  );
}

export default Header;
