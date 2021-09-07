import { io } from 'socket.io-client';

export default class SocketIoService
{
    static setupSocketConnection()
    {
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, { transports : ['websocket'] });

        this.socket.on('user-joined', (data) => {
            console.log('Se unió', data.username);
        });
    }

    static disconnect()
    {
        if (this.socket) {
            this.socket.disconnect();
        }
    }

    static userJoin(username)
    {
        this.socket.emit('user-join', { username: username });
    }
}