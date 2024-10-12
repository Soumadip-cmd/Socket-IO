const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const socket = new Server(httpServer, { 
  cors:{
    origin:'http://localhost:3000',
  }
 });

let crudData=[];
socket.on("connection", (socket) => {
  socket.on('Data-add',(data)=>{
    crudData.push(data)
    console.log(crudData)
    
  })

});

httpServer.listen(8080,()=>{
  console.log("Server connected!!..")
});