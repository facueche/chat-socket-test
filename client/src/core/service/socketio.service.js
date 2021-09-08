import { io } from 'socket.io-client';
import * as DateTime from '../helpers/DateTime';
export default class SocketIoService
{
    static setupSocketConnection()
    {
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, { transports : ['websocket'] });
    }

    static disconnect()
    {
        if (this.socket) {
            this.socket.disconnect();
        }
    }

    static userJoin(username)
    {
        this.username = username;
        this.socket.emit('user-join', { username: username });
    }

    static sendMessage(message)
    {
        this.socket.emit('send-message', {
            message: message,
            username: this.username,
            socketId: this.socket.id,
            datetime: DateTime.now()
        });
    }

    static onMessageReceive(callback)
    {
        this.socket.on('message-sended', data => callback({...data, type: 'message'}));
    }

    static onUserJoined(callback)
    {
        this.socket.on('user-joined', data => callback({...data, type: 'alert'}));
    }

    static getSocketId()
    {
        return this.socket.id;
    }
}