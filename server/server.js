const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const publicPath = path.join(__dirname, '../public');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New user connected");

    socket.on('createMessage', function(message){
       console.log('server received new message', message);

        io.emit('newMessage', {
            from: message.from,
            text:message.text,
            createdAT:new Date().getTime()
        })
    });

    socket.on('disconnect', () => {
        console.log("User was disconnected");
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});


