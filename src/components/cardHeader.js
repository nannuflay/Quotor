import useDarkMode from "../hook/useDarkMode";
import LeftIconBlack from "../assets/left-quotes-black.svg";
import RightIconBlack from "../assets/right-quotes-black.svg";
import LeftIconWhite from "../assets/left-quotes-sign(1).svg";
import RightIconWhite from "../assets/right-quotes-symbol(1).svg";

const CardHeader = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="">
      <div className="">
        {colorTheme === "dark" ? (
          <div>
            <div>
              <img
                className="absolute top-2 left-2 w-7 h-7"
                src={LeftIconBlack}
              />

              <img
                className="absolute bottom-2 right-2 w-7 h-7"
                src={RightIconBlack}
              />
            </div>
            <div className="absolute top-2 right-4">
              <button
                className="p-2 rounded-2xl hover:bg-gray-200 text-gray-500 hover:text-red-400"
                onClick={() => setTheme(colorTheme)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <img
                className="absolute top-2 left-2 w-7 h-7"
                src={LeftIconWhite}
              />

              <img
                className="absolute bottom-2 right-2 w-7 h-7"
                src={RightIconWhite}
              />
            </div>
            <button
              className="p-2 rounded-2xl hover:bg-gray-500 text-gray-400 hover:text-yellow-400 absolute top-2 right-4"
              onClick={() => setTheme(colorTheme)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CardHeader;
