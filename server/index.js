const express = require('express');

const app = express();
app.set('port', process.env.PORT || 9000);
const server = app.listen(app.get('port'));

const socket = require('socket.io');
const io = socket(server);

io.on('connection', function (socket) {

    socket.on('disconnect', () => {
        //
    });

    socket.on('user-join', (data) => {
        socket.broadcast.emit('user-joined', data);
    });

    socket.on('send-message', (data) => {
        console.log(data);
        io.emit('message-sended', data);
    });
})