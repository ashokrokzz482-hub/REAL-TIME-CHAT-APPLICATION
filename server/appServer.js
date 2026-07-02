const express = require("express");

const cors = require("cors");

const http = require("http");

const { Server } = require("socket.io");

const {
    establishSocketListeners
} = require("./socketManager");


// Create Express App

const applicationInstance = express();


// Enable CORS

applicationInstance.use(
    cors({
        origin: "http://localhost:5173"
    })
);


// Create HTTP Server

const httpServer =
    http.createServer(applicationInstance);


// Create Socket.IO Server

const socketServer =
    new Server(httpServer, {
        cors: {
            origin: "http://localhost:5173"
        }
    });


// Register Socket Events

establishSocketListeners(socketServer);


// Test Route

applicationInstance.get(
    "/",
    (requestObject, responseObject) => {

        responseObject.send(
            "Real-Time Chat Server Running"
        );

    }
);


// Server Port

const SERVER_PORT = 5000;


// Start Server

httpServer.listen(
    SERVER_PORT,
    () => {

        console.log(
            `Server running on port ${SERVER_PORT}`
        );

    }
);