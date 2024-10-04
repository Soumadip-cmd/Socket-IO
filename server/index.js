const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const socket = new Server(httpServer, { 
  cors:{
    origin:'http://localhost:3000',
  }
 });

socket.on("connection", (socket) => {
  console.log("kk",socket.id)

});

httpServer.listen(8080,()=>{
  console.log("Server connected!!..")
});