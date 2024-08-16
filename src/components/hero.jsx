import heroImage from "../images/me.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import HeroAmimation from "../Animation/hero.json";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div id="about" className="p-10 max-sm:px-2 flex justify-between max-sm:justify-center max-sm:items-center items-center border border-1 border-drBorder border-t-0">
      <motion.div
        transition={{ duration: 0.9, delay: 0.5 }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="left flex flex-col max-md:items-center max-md:text-center"
      >
        <div className="image">
          <img
            className="size-32 mb-7 rounded-full"
            src={heroImage}
            alt="My Image"
          />
        </div>

        <div className="text w-1/2 max-md:w-full">
          <h1 className="text-4xl w-[500px] max-xl:w-[350px] max-sm:w-full max-xl:text-2xl font-semibold">
            Frontend React Developer
          </h1>
          <p className="text-sm dark:text-drSubTitle text-gray-500 mt-5 leading-5">
            I am Abdalla Elhagar a frontend developer using react, i studied
            computer scinse an HIMIT , i always try to improve myself.{" "}
          </p>
        </div>

        <ul className="icones flex gap-5 mt-5 dark:text-drSubTitle">
          <li className="transition-all duration-150 hover:scale-110 hover:text-orange-400">
            <a
              className="text-xl"
              target="_blank"
              href="https://www.instagram.com/_abdalla.elhagar_/"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="transition-all duration-150 hover:scale-110 hover:text-orange-400">
            <a
              className="text-xl"
              target="_blank"
              href="https://github.com/Abdalla-Elhagar"
            >
              <FaGithub />
            </a>
          </li>
          <li className="transition-all duration-150 hover:scale-110 hover:text-orange-400">
            <a
              className="text-xl"
              target="_blank"
              href="https://www.linkedin.com/in/abdalla-elhgar-92a270241/"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        transition={{ duration: 0.9, delay: 0.5 }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="right"
      >
        <div className="max-lg:hidden">
          <Lottie
            className="size-[500px] max-xl:size-96"
            animationData={HeroAmimation}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
