import React, { useEffect } from "react";
import Home from "./components/Home";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:8080");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server with ID:", socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="h-screen text-xl text-white flex justify-center items-center">
      <Home />
    </div>
  );
}

export default App;
