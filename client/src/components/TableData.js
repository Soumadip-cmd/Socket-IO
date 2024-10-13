import React, { useEffect } from 'react'
import { io } from 'socket.io-client'

const socket = io("http://localhost:8080");

const TableData = (props) => {
  const {name,age,phno}=props
  useEffect(()=>{
    socket.on('read-data',(val)=>{
      console.log(val);
    })
  })
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-card border border-border shadow-lg rounded-lg table-fixed">
        <thead>
          <tr className="bg-secondary text-secondary-foreground border-b-2">
            <th className="py-3 px-6 border border-border text-left">Name</th>
            <th className="py-3 px-6 border border-border text-left">Age</th>
            <th className="py-3 px-6 border border-border text-left">Phone Number</th>
            <th className="py-3 px-6 border border-border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-background text-foreground hover:bg-muted transition duration-200 border-b">
            <td className="py-3 px-6 border border-border">{name}</td>
            <td className="py-3 px-6 border border-border">{age}</td>
            <td className="py-3 px-6 border border-border">+91 {phno}</td>
            <td className="py-3 px-6 border border-border space-x-2">
              <button className="bg-gray-600 text-primary-foreground hover:bg-gray-600/80 px-3 py-1 rounded transition duration-200">Edit</button>
              <button className="bg-gray-600 text-destructive-foreground hover:bg-gray-600/80 px-3 py-1 rounded transition duration-200">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableData
