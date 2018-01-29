const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
let app = express();

let server = http.createServer(app);

const publicPath = path.join(__dirname, '../public');

let io = socketIO(server);

app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

console.log(publicPath);
console.log(__dirname + '/../public');

io.on('connection', (socket) => {
    console.log("New user connected");

    socket.emit('newMessage', {
        from: "sush@magic.com",
        text: "love you",
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