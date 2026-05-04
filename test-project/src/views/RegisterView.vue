<template>
  <div id="body">
    <h1>Crie sua conta no sistema</h1>
    <AuthForm
      :hasUsername="true"
      :hasEmail="true"
      :hasPassword="true"
      @allowed-submit="callFetch"
    />
    <router-link to="/login">Já possui conta? Entre no sistema</router-link>
  </div>
</template>

<script>
import AuthForm from "../components/AuthForm.vue";
import api from "../services/api.js";

export default {
  name: "RegisterView",
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
        const response = await api.post("/register", eventValue);
        if (response.status == 201) {
          console.log("Usuário criado com sucesso!");
          this.$router.push("/login");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<!-- <style lang="scss">
$background-color: ;

#body {
  background-color: $background-color;
}
</style> -->
