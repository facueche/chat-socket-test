<template>
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-primary">
        <div class="panel-body">
          <ul class="chat">
            <li class="float-start clearfix">
              <div class="chat-body left clearfix">
                <div class="header">
                  <strong class="primary-font Nombre">Jack Sparrow</strong>
                  <small class="pull-right text-muted">
                    <span class="glyphicon glyphicon-asterisk Tiempo">
                      12/02/2015</span
                    ></small
                  >
                </div>
                <p class="Mensaje">Mensaje</p>
              </div>
            </li>
            <li class="float-end clearfix">
              <div class="chat-body right clearfix">
                <div class="header">
                  <strong class="primary-font Nombre">Jack Sparrow</strong>
                  <small class="pull-right text-muted">
                    <span class="glyphicon glyphicon-asterisk Tiempo">
                      12/02/2015</span
                    ></small
                  >
                </div>
                <p class="Mensaje">Mensaje</p>
              </div>
            </li>
            <li class="user-joined">
                <small>Se unió usuario</small>
            </li>
          </ul>
        </div>
        <div class="panel-footer">
          <div class="input-group">
            <input
              type="text"
              class="form-control input-sm"
              placeholder="Escribe un mensaje..."
            />
            <span class="input-group-btn">
              <button class="btn btn-warning btn-sm send-btn">
                Enviar
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocketIoService from '../core/service/socketio.service';

export default {
  name: "Chat",
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  beforeMount() {
      if (this.username === undefined)
        this.$router.push({ name: 'UsernameEntry' });
  },
  created() {
    SocketIoService.setupSocketConnection();
    SocketIoService.userJoin(this.username);
  },
  beforeUnmount() {
    SocketIoService.disconnect();
  },
  data() {
    return {
      mesaage: "",
      action: "",
    };
  },
};
</script>

<style scoped>
.chat {
  list-style: none;
  margin: 0;
  padding: 0;
}

.chat li {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px dotted #b3a9a9;
  background-color: snow;
  border-radius: 20px;
  width: 60%;
}

.chat li .left {
  text-align: left;
  padding-left: 5%;
}

.chat li .right {
  text-align: right;
  padding-right: 5%;
}

.chat li .chat-body p {
  margin: 0;
  color: #777777;
}

.panel .slidedown .glyphicon,
.chat .glyphicon {
  margin-right: 5px;
}

.panel-body {
  overflow-y: scroll;
  height: 800px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

button {
    height: 100%;
    width: 100px;
}

.user-joined {
    display: flex;
    width: 100% !important;
    background-color: rgb(255,255,255,0) !important;
    border-radius: inherit !important;
    border-bottom: none !important;
    justify-content: center;
}

.user-joined small {
    color: gray;
}
</style>