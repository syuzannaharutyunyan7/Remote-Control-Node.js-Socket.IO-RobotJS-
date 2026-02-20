const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const robot = require("robotjs"); // mouse & keyboard control
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PASSWORD = "1234"; // Change to your own secure password
let authenticatedClients = new Set();

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("authenticate", (pass) => {
        if (pass === PASSWORD) {
            authenticatedClients.add(socket.id);
            socket.emit("auth_success");
        } else {
            socket.emit("auth_failed");
        }
    });

    socket.on("type", (text) => {
        if (authenticatedClients.has(socket.id)) {
            robot.typeString(text);
        }
    });

    socket.on("key", (key) => {
        if (authenticatedClients.has(socket.id)) {
            robot.keyTap(key);
        }
    });

    socket.on("mouse_move", (data) => {
        if (authenticatedClients.has(socket.id)) {
            const pos = robot.getMousePos();
            robot.moveMouse(pos.x + data.x, pos.y + data.y);
        }
    });

    socket.on("click", (button) => {
        if (authenticatedClients.has(socket.id)) {
            robot.mouseClick(button);
        }
    });

    socket.on("disconnect", () => {
        authenticatedClients.delete(socket.id);
    });
});

const PORT = 5500;
server.listen(PORT, () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
