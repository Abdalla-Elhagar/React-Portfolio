import { useState } from "react";
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Data from "./data";
import { motion , AnimatePresence } from "framer-motion";
function Projects() {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(Data);
  const [show,setShow] = useState(false);
  function handleshow(){
    setShow(!show)
  }

  return (
      <main id="projects" className="p-10 max-sm:px-2 max-sm:py-10 border border-1 max-md:flex-col max-md:items-center border-drBorder border-t-0 gap-24 flex">
        <section className="leftSection flex flex-col w-40 max-md:flex-row max-md:justify-center gap-2 max-md:flex-wrap max-md:w-full">
          <button
            onClick={() => {
              setArr(() => Data);
              setActive(() => "all");
            }}
            className={`${
              active === "all" ? "active" : null
            } dark:text-drSubTitle text-gray-100 dark:hover:bg-zinc-950 hover:bg-gray-600  p-3 mb-2 rounded-lg dark:bg-drBgHeader/60 duration-300 transition-all w-40 max-md:w-20 bg-zinc-600  max-md:text-xs`}
          >
            All Projects
          </button>
          <button
            onClick={() => {
              setActive(() => "HTML&CSS");
              const newArr = Data.filter((ele) => {
                const item = ele.type.filter((e) => {
                  return e === "HTML&CSS";
                });
                return item[0] === "HTML&CSS";
              });
              setArr(newArr);
            }}
            className={`${
              active === "HTML&CSS" ? "active" : null
            } dark:text-drSubTitle text-gray-100 dark:hover:bg-zinc-950 hover:bg-gray-600 p-3 mb-2 rounded-lg dark:bg-drBgHeader/60 duration-300 transition-all w-40 max-md:w-20 bg-zinc-600  max-md:text-xs`}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => {
              setActive(() => "JavaScript");
              const newArr = Data.filter((ele) => {
                const item = ele.type.filter((e) => {
                  return e === "JavaScript";
                });
                return item[0] === "JavaScript";
              });
              setArr(newArr);
            }}
            className={`${
              active === "JavaScript" ? "active" : null
            } dark:text-drSubTitle text-gray-100 dark:hover:bg-zinc-950 hover:bg-gray-600 p-3 mb-2 rounded-lg dark:bg-drBgHeader/60 duration-300 transition-all w-40 max-md:w-20 bg-zinc-600  max-md:text-xs`}
          >
            JavaScript
          </button>
          <button
            onClick={() => {
              setActive(() => "React");
              const newArr = Data.filter((ele) => {
                const item = ele.type.filter((e) => {
                  return e === "React";
                });
                return item[0] === "React";
              });
              setArr(newArr);
            }}
            className={`${
              active === "React" ? "active" : null
            } dark:text-drSubTitle text-gray-100 dark:hover:bg-zinc-950 hover:bg-gray-600 p-3 mb-2 rounded-lg dark:bg-drBgHeader/60 duration-300 transition-all w-40 max-md:w-20 bg-zinc-600  max-md:text-xs`}
          >
            React
          </button>
          <button
            onClick={() => {
              setActive(() => "BootStrap");
              const newArr = Data.filter((ele) => {
                const item = ele.type.filter((e) => {
                  return e === "BootStrap";
                });
                return item[0] === "BootStrap";
              });
              setArr(newArr);
            }}
            className={`${
              active === "BootStrap" ? "active" : null
            } dark:text-drSubTitle text-gray-100 dark:hover:bg-zinc-950 hover:bg-gray-600 p-3 mb-2 rounded-lg dark:bg-drBgHeader/60 duration-300 transition-all w-40 max-md:w-20 bg-zinc-600  max-md:text-xs`}
          >
            Bootstrap
          </button>
          <button
            onClick={() => {
              setActive(() => "tailWind");
              const newArr = Data.filter((ele) => {
                const item = ele.type.filter((e) => {
                  return e === "tailWind";
                });
                return item[0] === "tailWind";
              });
              setArr(newArr);
            }}
            className={`${
              active === "tailWind" ? "active" : null
            } dark:text-drSubTitle text-gray-100 dark:hover:bg-zinc-950 hover:bg-gray-600 p-3 mb-2 rounded-lg dark:bg-drBgHeader/60 duration-300 transition-all w-40 max-md:w-20 bg-zinc-600  max-md:text-xs`}
          >
            Tailwind
          </button>
        </section>
        <section className="projects flex justify-center flex-wrap gap-7">
          <AnimatePresence>
          {arr.map((ele) => {return(
            <motion.div
            layout
            whileHover={{rotate:1,borderColor:'rgb(2, 154, 255)'}}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opactiy: 0 }}
            transition={{type:'spring',damping:10 }}
              key={ele.id}
              className="card max-sm:w-full relative dark:bg-zinc-800 bg-white shadow-lg border border-drBorder w-[365px] h-[350px] rounded-lg overflow-hidden"
            >
              <img src={ele.image} alt="project image" className=" rounded-xl" />
              <h1 className="text-lg my-3 font-bold px-2">{ele.name}</h1>
              <p className="text-md px-2 text-drSubTitle  leading-[1.3]">
                {ele.desc}
              </p>
              <div className="bottom-5 w-full absolute mt-5 px-2 flex justify-between">
                <div className="left text-xl gap-3 text-drSubTitle flex">
                  <a className="hover:text-blue-400" target="_blank" href={ele.website}>
                    <FiLink className="text-xl" />
                  </a>
                  <a className="hover:text-blue-400" target="_blank" href={ele.github}>
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <div className="right text-blue-500 hover:text-blue-400 group transition-all duration-200">
                </div>
              </div>
            </motion.div>
            
          )})}
          </AnimatePresence>
        </section>
        
      </main>
  );
}

export default Projects;


