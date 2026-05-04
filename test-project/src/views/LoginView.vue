<template>
  <div>
    <h1>Entre no sistema</h1>
    <AuthForm
      :hasUsername="true"
      :hasEmail="false"
      :hasPassword="true"
      @allowed-submit="callFetch"
    />
    <router-link to="/register">Ainda não possui conta? Crie aqui</router-link>
  </div>
</template>

<script>
import AuthForm from "../components/AuthForm.vue";
import api from "../services/api.js";

export default {
  name: "LoginView",
  components: {
    AuthForm,
  },
  methods: {
    callFetch(eventValue) {
      if (eventValue) {
        this.sendData(eventValue);
      }
    },

    async sendData(eventValue) {
      try {
        const response = await api.post("/login", eventValue);
        if (response.status == 200) {
          const token = response.headers["authorization"];
          console.log(response.headers);
          const user = response.data.user;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          console.log("Usuário autenticado com sucesso!");
          this.$router.push("/");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
