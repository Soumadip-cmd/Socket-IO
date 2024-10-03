import React, { useEffect } from "react";
import Home from "./components/Home";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:8080");
  function connectSocket() {
    socket.on("connection", (response) => {
      console.log(response);
    });
  }

  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <div className="h-screen text-xl text-white flex justify-center items-center">
      <Home />
    </div>
  );
}

export default App;
