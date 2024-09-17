

const io = require("socket.io")(8080, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});


io.on('connect',socket=>{
  console.log(socket.id)
  socket.on('msg-event',(cb)=>{
    // console.log(msg)
    cb('i gotcha')
  })

  socket.emit('server-msg',"Server connected");
})