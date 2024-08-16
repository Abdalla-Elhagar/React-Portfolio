import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setShow(true) : setShow(false);
    });
  }, []);

  return (
    <AnimatePresence>
      <div className="w-full dark:bg-drPrimary bg-gray-100 relative dark:text-drTitle overflow-hidden">
        <div className="container w-[80%] mx-auto bg-white dark:bg-drSecondary">
          <Header />
          <Hero />
          <Projects />
          <Contact />
          <Footer />
        </div>

        {show && (
          <a href="#up">
            <motion.button
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed bottom-10 right-10 rounded-full group size-12 bg-blue-600 hover:bg-blue-500 transition-all duration-300 active:scale-90"
            >
              <FaChevronUp className="m-auto group-hover:translate-y-[-2px] transition-all duration-300" />
            </motion.button>
          </a>
        )}
      </div>
    </AnimatePresence>
  );
}
