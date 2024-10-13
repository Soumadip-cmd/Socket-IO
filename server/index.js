const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { 
  cors: {
    origin: 'http://localhost:3000',
  }
});

let crudData = [];
io.on("connection", (socket) => {
  // Add new data
  socket.on('Data-add', (data) => {
    crudData.push(data);
    io.emit('readData', crudData); // Broadcast to all clients
  });

  // Edit data
  socket.on('editData', (res) => {
    let cIndex = crudData.findIndex((data) => data.id === res.id);
    if (cIndex !== -1) {
      crudData[cIndex] = { ...crudData[cIndex], ...res };
    }
    io.emit('readData', crudData); // Broadcast updated data
  });
});

httpServer.listen(8080, () => {
  console.log("Server connected on port 8080!");
});
