import React, { useState } from 'react'
import { io } from 'socket.io-client'

const socket = io("http://localhost:8080");

const Form = () => {
  const [data, setData] = useState({ name: "", age: "", ph: "" })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('Data-add',data);
    
  }

  return (
    <div>
      <h1 className="text-5xl font-semibold mb-12 flex justify-center items-center" style={{ fontFamily: '"Fredoka", sans-serif' }}>
        CRUD operations
      </h1>
      <form className="text-lg gap-0 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          className="bg-black border border-slate-600 px-4 py-2 rounded-lg"
          placeholder="Enter Your Name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="age"
          value={data.age}
          className="bg-black border border-slate-600 px-4 py-2 rounded-lg"
          placeholder="Enter Your Age"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="tel"
          name="ph"
          value={data.ph}
          className="bg-black border border-slate-600 px-4 py-2 rounded-lg"
          placeholder="Enter Your Phone Number"
          onChange={handleChange}
          required
        />
        <br />
        <button
          type="submit"
          className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2 dark:bg-gray-900 dark:text-white dark:border-gray-600 dark:hover:bg-gray-950 dark:hover:border-gray-600"
        >
          Add Data
        </button>
      </form>
    </div>
  )
}

export default Form
