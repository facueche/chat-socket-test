<template>
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <div class="card">
        <div class="card-header">
          Chat
        </div>
        <div class="card-body">
          <h5 class="card-title">Ingresa tu nombre</h5>
          <div class="mb-3">
            <input type="text" v-model="username" class="form-control" placeholder="Nombre" @keyup.enter="join">
          </div>
          <button class="btn btn-primary" @click="join">Unirse</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsernameEntry',
  components: {
  },
  data() {
    return {
      username: '',
    }
  },
  methods: {
    join() {
      if (this.username === '') {
        alert('Debes ingresar un nombre de usuario');
        return;
      }
      this.$router.push({ name: 'Chat', params: { username: this.username } });
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
