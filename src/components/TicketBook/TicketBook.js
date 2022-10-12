import React, { useState } from "react";

const TicketBook = ({ open, onClose, movies }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    const userData = { email, name, number };
    console.log(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    event.target.reset();
  };
  if (!open) return null;
  return (
    <>
      <div className=" bg-gray-50 modalBtn border shadow rounded-xl">
        <div className="w-full max-w-2xl h-full md:h-auto">
          <div className="rounded-lg  dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <div className="div">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {movies?.name}
                </h3>
                <div className="flex text-pgColor text-sm pb-4">
                  <p>{movies?.premiered}</p>
                  {movies?.premiered ? "," : null}
                  <p className="pl-1">{movies?.language}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* input from  */}
            <form
              className="w-full min-w-[300px] px-6 pt-4"
              onSubmit={handleAddItem}
            >
              <div className="mb-2">
                <input
                  onChange={handleEmail}
                  name="email"
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required=""
                />
              </div>
              <div className="mb-2">
                <input
                  onChange={handleName}
                  name="name"
                  type="text"
                  id="text"
                  placeholder="Jhon Smith"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required=""
                />
              </div>
              <div className="mb-2">
                <input
                  onChange={handleNumber}
                  name="number"
                  type="number"
                  id="number"
                  placeholder="+9 15474 5445"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4 mt-2"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketBook;
