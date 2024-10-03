import React from 'react'

const Form = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold mb-12 flex justify-center items-center" style={{ fontFamily: '"Fredoka", sans-serif' }}>
        CRUD operations
      </h1>
      <form className=" text-lg  gap-0 flex justify-center items-center flex-col">
        <input
          type="text"
          name=""
          id=""
          className="bg-black border border-slate-600 px-4 py-2  rounded-lg"
          placeholder="Enter Your Name"
          required
        />
        <br />
        <input
          type="text"
          name=""
          id=""
          className="bg-black border border-slate-600 px-4 py-2  rounded-lg"
          placeholder="Enter Your Age"
          required
        />
        <br />
        <input
          type="tel"
          name=""
          id=""
          className="bg-black border border-slate-600 px-4 py-2  rounded-lg"
          placeholder="Enter Your Phone Number"
          required
        />
        <br />

        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100  font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2 dark:bg-gray-900 dark:text-white dark:border-gray-600 dark:hover:bg-gray-950 dark:hover:border-gray-600"
        >
          Add Data
        </button>
      </form>{" "}
    </div>
  )
}

export default Form
