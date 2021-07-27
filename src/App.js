import React, { useEffect, useState } from "react";
import MyLoader from "./components/myLoader";
import CardHeader from "./components/cardHeader";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [Loading, setLoading] = useState(true);

  const quoteHandler = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        document.title = data.author + " Once said " + data.content;
        setLoading(false);
      });
  };

  useEffect(() => {
    quoteHandler();
  }, []);

  return (
    <div className="app bg-gray-200 dark:bg-gray-900 flex justify-center text-center align-middle items-center h-screen">
      <div
        className="w-5/6 md:w-3/6 bg-white dark:bg-gray-800 flex justify-center items-center  rounded-lg shadow-2xl relative "
        style={{ height: 400 + "px" }}
      >
        <div>
          <CardHeader />
          <button
            className="absolute top-2 right-14 p-2 rounded-2xl hover:bg-gray-200
             hover:dark:text-white dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-white "
            onClick={quoteHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        {Loading ? (
          <MyLoader />
        ) : (
          <div className="flex items-center justify-center">
            <div className=" w-5/6">
              <div className="flex justify-center text-start ">
                <div className="">
                  <span className="lg:text-3xl text-lg  font-thin text-gray-400 dark:text-white font-Kalam">
                    {quote}
                  </span>
                  <span className="flex justify-end lg:text-xl  text-green-700 mt-3 font-Kalam dark:text-gray-400 ">
                    _{author}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-start items-center absolute bottom-2 left-2 text-gray-700 dark:text-gray-200 text-sm">
          <span className="mr-2 font-Kaushan  lg:text-lg -mt-1">Quotor</span>{" "}
          created with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mx-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
          by{" "}
          <span className="font-bold mx-1 text-gray-800 dark:text-gray-300 font-Kalam">
            {" "}
            simbaaf
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
