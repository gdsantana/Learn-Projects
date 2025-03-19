<template>
  <div class="login-container">
    <h1 class="title">Faça Login</h1>

    <form class="login-form">
      <input class="input" type="text" placeholder="Usuário" />
      <input class="input" type="password" placeholder="Senha" />
      <button type="submit" @click="showWarning">Entrar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
function showWarning() {
  alert('My bad, não fiz ainda');
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: grey;
  padding: 20px;
  border-radius: 8px;
  gap: 24px;
}
.title{
  font-size: 32px;
}
.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input {
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  color: yellow;
  background-color: black;
}
</style>
