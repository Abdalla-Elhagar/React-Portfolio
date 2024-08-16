function Footer() {
  return (
    <div id="footer" className=" flex justify-between px-10 text-black dark:text-drSubTitle py-5 border border-drBorder border-t-0 border-b-0 max-md:justify-center">
      <div className="right">
        <ul className="nav font-semibold flex gap-5 max-md:text-sm">
          <li className=" transition-all duration-150 hover:scale-110">
            <a href="#about">About</a>
          </li>
          <li className=" transition-all duration-150 hover:scale-110">
            <a href="#projects">Project</a>
          </li>
          <li className=" transition-all duration-150 hover:scale-110">
            <a href="#contact">Speaking</a>
          </li>
        </ul>
      </div>
      <div className="left max-md:hidden">
        <p>abdallaelhgar@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
