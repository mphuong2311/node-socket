import { createServer } from "http";
import { Server } from "socket.io";
const CORS = {
  methods: ["GET", "POST", "PATCH", "DELETE"],
  origin: "http://localhost:8080",
  credentials: true,
  optionsSuccessStatus: 200,
  allowEIO3: true,
  transports: ['polling']
};

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: CORS,
});
io.on("connection", (socket) => {
  socket.on("client_send", (data) => {
    console.log("Client sent: " + data);
    socket.emit("server_send", "Hello " + data);
  });
});

httpServer.listen(3000);
console.log("Server listening on http://localhost:3000");
