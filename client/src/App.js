import React from "react";
import Home from "./components/Home";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:8080");
  // const msg = "Hey man5 ";
  socket.emit("msg-event", (msg)=>{
    console.log(msg)
  });
  socket.on('server-msg',(msg)=>{
    document.write(msg);
  })
  return (
    <>
      <Home />
    </>
  );
}

export default App;
