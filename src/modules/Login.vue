<template>
  <div class="container">
    <div class="jumbotron">
      <h2>Login</h2>
      <hr>
      <form>
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            v-model="username"
            class="form-control"
            placeholder="Enter username"
            name="username"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input
            v-model="password"
            class="form-control"
            placeholder="Enter password"
            name="password"
          />
        </div>
        <button @click="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit: function() {
      console.log("Username: " + this.username + "\nPassword: " + this.password);
      alert("Username: " + this.username + "\nPassword: " + this.password);
    }
  }
};
</script>