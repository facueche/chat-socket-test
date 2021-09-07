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
        console.log('Se unió', data.username);
        socket.broadcast.emit('user-joined', data);
    });
})