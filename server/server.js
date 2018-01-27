const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
let app = express();

const publicPath = path.join(__dirname, '../public');

let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

console.log(publicPath);
console.log(__dirname + '/../public');

io.on('connection', (socket) => {
    console.log("New user connected");

    socket.on('disconnect', () => {
        console.log("User was disconnected");
    });
});





server.listen(port, () => {
   console.log(`Server is running on port ${port}!`);
});