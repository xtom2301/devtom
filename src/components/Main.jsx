import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Main = () => {
  return (
    <div className="sm:flex sm:justify-center sm:flex-col min-h-screen">
      <div className="text-center p-6">
        <h1 className="text-4xl py-2 font-bold text-indigo-500 ">Tom Martin</h1>
        <h3 className="text-2xl py-2 dark:text-white">
          Junior-Developer and learner.
        </h3>
        <div className="overflow-hidden mx-auto rounded-3xl w-72 h-72 m-6 shadow-lg shadow-gray-700 dark:shadow-gray-400">
          <img src="me.JPG" alt="me" className="object-cover" />
        </div>
        <p className="py-5 text-gray-600 sm:w-96 sm:mx-auto dark:text-gray-400">
          I create Websites and little Projects for myself, friends or clients.
          Join me down below to get and stay in touch!
        </p>
      </div>
      <div className="text-4xl flex justify-center gap-4 py-2 text-gray-600">
        <AiFillGithub className="cursor-pointer dark:text-white" />
        <AiFillLinkedin className="cursor-pointer dark:text-white" />
        <AiFillTwitterCircle className="cursor-pointer dark:text-white" />
        <AiFillInstagram className="cursor-pointer dark:text-white" />
      </div>
    </div>
  );
};

export default Main;
