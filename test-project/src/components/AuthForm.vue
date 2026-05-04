<template>
  <div>
    <h2>Preencha os campos abaixo</h2>
    <form @submit.prevent="sendData">
      <input
        type="text"
        v-if="hasUsername"
        v-model="username"
        placeholder="Digite o username"
        required
      />
      <input
        type="text"
        v-if="hasEmail"
        v-model="email"
        placeholder="Digite o email"
        required
      />
      <input
        type="password"
        v-if="hasPassword"
        v-model="password"
        placeholder="Digite a senha"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  props: {
    hasUsername: Boolean,
    hasEmail: Boolean,
    hasPassword: Boolean,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    sendData() {
      if (this.hasEmail) {
        this.$emit("allowed-submit", {
          username: this.username,
          email: this.email,
          password: this.password,
        });
      } else {
        this.$emit("allowed-submit", {
          username: this.username,
          password: this.password,
        });
      }
    },
  },
};
</script>
