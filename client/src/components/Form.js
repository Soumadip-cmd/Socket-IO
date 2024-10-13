import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid"; // Import uuid for unique ID generation

const socket = io("http://localhost:8080");

const Form = () => {
  const [formData, setFormData] = useState({ name: "", age: "", ph: "" });
  const [dataList, setDataList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const getEditdata = (data) => {
    setFormData(data);
    setIsEdit(true);
  };

  const handleEdit = (e) => {
    e.preventDefault()
    socket.emit('editData', formData);
    setIsEdit(false); // Reset edit mode after submitting edit
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...formData, id: uuidv4() }; // Generate unique ID for new entry
    socket.emit("Data-add", newData);
    setFormData({ name: "", age: "", ph: "" }); // Clear form fields after adding
  };

  useEffect(() => {
    socket.on("readData", (res) => {
      setDataList(res);
    });
  }, []);

  return (
    <div>
      <h1
        className="text-5xl font-semibold mb-12 flex justify-center items-center"
        style={{ fontFamily: '"Fredoka", sans-serif' }}
      >
        CRUD operations
      </h1>
      <form
        className="text-lg gap-0 flex justify-center items-center flex-col"
        onSubmit={isEdit ? handleEdit : handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          className="bg-black border border-slate-600 px-4 py-2 rounded-lg"
          placeholder="Enter Your Name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="age"
          value={formData.age}
          className="bg-black border border-slate-600 px-4 py-2 rounded-lg"
          placeholder="Enter Your Age"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="tel"
          name="ph"
          value={formData.ph}
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
          {isEdit ? "Edit" : "Add"} Data
        </button>
      </form>
      <section className="my-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-card border border-border shadow-lg rounded-lg table-fixed">
            <thead>
              <tr className="bg-secondary text-secondary-foreground border-b-2">
                <th className="py-3 px-6 border border-border text-left">
                  Name
                </th>
                <th className="py-3 px-6 border border-border text-left">
                  Age
                </th>
                <th className="py-3 px-6 border border-border text-left">
                  Phone Number
                </th>
                <th className="py-3 px-6 border border-border text-left">
                  Actions
                </th>
              </tr>
            </thead>
            {dataList.map((item, index) => (
              <tbody key={index}>
                <tr className="bg-background text-foreground hover:bg-muted transition duration-200 border-b">
                  <td className="py-3 px-6 border border-border">
                    {item.name}
                  </td>
                  <td className="py-3 px-6 border border-border">{item.age}</td>
                  <td className="py-3 px-6 border border-border">
                    +91 {item.ph}
                  </td>
                  <td className="py-3 px-6 border border-border space-x-2">
                    <button
                      className="bg-gray-600 text-primary-foreground hover:bg-gray-600/80 px-3 py-1 rounded transition duration-200"
                      onClick={() => getEditdata(item)}
                    >
                      Edit
                    </button>
                    <button className="bg-gray-600 text-destructive-foreground hover:bg-gray-600/80 px-3 py-1 rounded transition duration-200">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </section>
    </div>
  );
};

export default Form;
