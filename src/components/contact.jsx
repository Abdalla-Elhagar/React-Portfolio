import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import Done from '../Animation/done.json'
import ContactUs from '../Animation/constactUs.json'

function Contact() {
  const [state, handleSubmit] = useForm("mzzpvpye");
    
        
    
  return (
    <div id="contact" className="p-10 w-full border border-1 border-drBorder flex justify-start relative items-center border-t-0 text-gray-800 dark:text-drSubTitle">
      <div className="left">
        <h1>
          <MdEmail className="inline mr-5 text-3xl" />{" "}
          <span className="text-3xl font-bold align-middle">Contact us</span>
        </h1>
        <p className="mb-12 mt-3 text-sm">
          Contact us for more information and get notifed when i publish some
          new.
        </p>
        <form onSubmit={handleSubmit} className="flex max-sm:mb-20 flex-col">
          <div className="flex max-md:flex-col max-md:items-start items-center">
            <label className="w-32">Email Address:</label>
            <input autoComplete="off"
              required
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-5 dark:bg-zinc-800 bg-gray-100 border border-zinc-700/50 align-middle ml-5 max-md:ml-0 max-md:w-full rounded-md w-80 h-10 my-2 focus:border-green-500/50 focus:outline-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex max-md:flex-col max-md:items-start items-center">
            <label className="w-32">Your message:</label>
            <textarea
              required
              id="message"
              name="message"
              placeholder="Message"
              rows="8"
              cols="20"
              className="p-5 dark:bg-zinc-800 bg-gray-100 border border-zinc-700/50 align-middle ml-5 max-md:ml-0 max-md:w-full rounded-md w-80 my-2 focus:border-green-500/50 focus:outline-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="dark:bg-zinc-800 bg-gray-100 max-md:self-center border w-28 h-10 rounded-md text-black dark:text-white mt-5 border-zinc-600 transition-all duration-200 hover:border-green-500/50 hover:text-green-500"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        {state.succeeded ? <div className="m-5 max-sm:m-0 max-sm:absolute max-sm:left-[-20px] max-sm:bottom-2 max-sm:w-full flex w-full items-center justify-start"><Lottie loop={false} className="size-28" animationData={Done} /> <p className="ml-[-20px]">Your message has been sent successfully</p> </div> : null
  }
      </div>
      <div className="right max-lg:hidden "><Lottie className="size-[400px] absolute top-1/2 translate-y-[-50%] xl:right-40 lg:right-20 max-xl:right-0 max-lg:right-0 max-xl:size-80" animationData={ContactUs} /></div>
    </div>
  );
}

export default Contact;
