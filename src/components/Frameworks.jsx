import { frameworks } from "../utils/utils";

const Frameworks = () => {
  return (
    <div className="text-center p-4 shadow-lg dark:shadow-2xl">
      <h1 className="text-xl mt-4 dark:text-white">Libraries & Frameworks</h1>
      {frameworks.map(({ name, percent, icon }) => (
        <div key={name} className="flex flex-col space-y-1 mt-2">
          <div className="flex items-center gap-2">
            <div className="text-xl dark:text-white">{icon}</div>
            <h1 className="dark:text-white">{name}</h1>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-indigo-500 h-3 rounded-full"
              style={{ width: percent }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Frameworks;
