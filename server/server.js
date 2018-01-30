const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log("New user connected");

    socket.emit('newMessage', {
        from: "julie@example.com",
        text: "Hi, lets meet tonight?",
        createdAt: "Dec 12, 2079"
    });

    socket.on('createMessage', function(messageCreate){
       console.log('messageCreate', messageCreate);
    });

    socket.on('disconnect', () => {
        console.log("User was disconnected");
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});


