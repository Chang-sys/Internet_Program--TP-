<script setup>
import { RouterLink } from "vue-router";
import Welcome from "../components/Welcome.vue";
</script>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        credentials: "include", //allow cookies to store in browser
        headers: {
          "content-type": "application/JSON",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      });

      const result = await res.json();
      if(!result.success) {
        alert(result.error);
        return;
      }

      this.$router.push({name: "home"})
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Welcome msg="Welcome" />

      <nav>
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>
  </header>

  <div class="login-wrapper">
    <img class="user-profile" alt="userProfile" src="../assets/user_profile.png">

    <form id="login" @submit="login">

      <label class="name" for="email">Username</label>
      <input class="email" required="login[email]" type="text" id="email" v-model="email" placeholder="Enter Email"
        autocapitalize="off" autocorrect="off" />

      <label class="pass" for="password">Password</label>
      <input class="password" id="password" v-model="password" type="password" placeholder="***********" />

      <div class="homeView">
        <button id="btn-logIn" type="submit">
          login
        </button>
      </div>

      <div class="forgetPwd">
        <p>Forget<a hid="#" style="color: rgb(38, 240, 2)"> Password?</a></p>
      </div>

      <div id="login-fail" hidden>
        <p class="login-fail-message" id="login_fail">Email or Password incorrect! Please try again...</p>
      </div>

    </form>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

header {
  margin-left: 150px;
  line-height: 1.5;
  max-height: 100vh;
}

.green {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

nav a.router-link-exact-active {
  color: #04AA6D;
  text-decoration: underline;
  text-underline-offset: 6px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.login-wrapper {
  width: 100%;
  padding: 20px;
  /* margin: 20px 20px 20px 130px; */
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 3px solid rgb(38, 240, 2);
  background-color: white;
}

.user-profile {
  margin-bottom: 30px;
}

#login {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 16px;
  margin-bottom: 5px;
  color: black;
}

.pass {
  font-size: 16px;
  margin-bottom: 5px;
  color: black;
}

input[type=text],
input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  border-radius: 6px;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus,
input[type=password]:focus {
  background-color: #ddd;
  outline: none;
  border-radius: 6px;
}

.homeView {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.homeView:hover {
  background-color: white;
  cursor: default;
}

#btn-logIn {
  width: 50%;
  height: 40px;
  font-size: 18px;
  margin: 20px 0 20px 0;
  border-radius: 5px;
  color: white;
  background-color: #04AA6D;
  cursor: pointer;
  text-align: center;
}

#btn-logIn:hover {
  background-color: #15803d;
}

.forgetPwd {
  color: black;
  font-size: 16px;
  display: flex;
  margin: 10px 0 10px 0;
  align-items: center;
  justify-content: end;
}

.red-Placeholder::placeholder {
  color: red;
}

.login-fail-message {
  color: red;
  width: fit-content;
  font-size: 20px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
}
</style>

