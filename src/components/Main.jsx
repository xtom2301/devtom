import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Main = () => {
  return (
    <div className="sm:flex sm:justify-center sm:flex-col min-h-screen">
      <div className="text-center p-6">
        <h1 className="text-4xl py-2 font-bold text-indigo-500 ">Tom Martin</h1>
        <h3 className="text-2xl py-2 dark:text-white">
          Developer and learner.
        </h3>
        <div className="overflow-hidden mx-auto rounded-3xl w-72 h-72 m-6 shadow-lg shadow-gray-700 dark:shadow-gray-400">
          <img src="me.JPG" alt="me" className="object-cover" />
        </div>
        <p className="py-5 text-gray-600 sm:w-96 sm:mx-auto dark:text-gray-400">
          I create Websites and little Projects for myself, friends or others.
          Join me down below to get and stay in touch!
        </p>
      </div>
      <div className="text-4xl flex justify-center gap-4 py-2 text-gray-600">
        <a href="https://github.com/xtom2301" target="_blank">
          <AiFillGithub className="cursor-pointer dark:text-white" />
        </a>

        <a href="https://x.com/xtom2301" target="_blank">
          <FaSquareXTwitter className="cursor-pointer dark:text-white" />
        </a>
        <a href="https://www.instagram.com/lll_t_o_m_lll/" target="_blank">
          <AiFillInstagram className="cursor-pointer dark:text-white" />
        </a>
        <a href="mailto: xtom2301@gmail.com">
          {" "}
          <AiFillMail className="cursor-pointer dark:text-white" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Main;
