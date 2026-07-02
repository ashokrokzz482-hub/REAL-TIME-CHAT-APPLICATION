import { io } from "socket.io-client";

const socketChannel = io(
    "http://localhost:5000"
);

export default socketChannel;