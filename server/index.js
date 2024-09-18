const { instrument } = require("@socket.io/admin-ui");

const io = require("socket.io")(8080, {
  cors: {
    origin: ["http://localhost:3000", "https://admin.socket.io"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});


io.on("connect", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("msg-event", (cb) => {
    // Callback function to acknowledge the message
    cb("i gotcha");
  });

  socket.emit("server-msg", "Server connected");
});

// Setting up admin-ui instrumentation
instrument(io, { auth: false });
