<template>
  <div>
    <h1>Home Page</h1>
    <h2>Seja bem-vindo, {{ user.username }}</h2>
    <button @click="clearStorage">Logout</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    clearStorage() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
};
</script>
