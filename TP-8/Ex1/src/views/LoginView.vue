<script>
import { RouterLink, RouterView } from 'vue-router'
import router from '../router/index.js'
export default {
  name: 'LoginView',

  methods: {
    getInputElement() {
      return { email: this.$refs.email, password: this.$refs.password }
    },
    getInputValue() {
      return { email: this.$refs.email.value, password: this.$refs.password.value }
    },
    userLogin() {
      console.log(router.getRoutes()[2].beforeEnter);
      if (!this.isCompleteInput()) {
        return;
      } else {
        document.getElementById('login-fail').hidden = true;
        fetch('http://localhost:3002/', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.getInputValue())
        }).then(async (res, rej) => {
          const data = await res.json();
          if (data.success === true) {
            router.getRoutes()[2].beforeEnter = (from, to, next) => {
              next(true);
            }
            this.$router.push('/home')
          } else {
            document.getElementById('login-fail').hidden = false;
          }
        })
      }
    },
    isCompleteInput() {
      const input = this.getInputElement();
      let bool = true;
      for (let inp in input) {
        if (input[inp].value === "") {
          bool = false;
          input[inp].attributes.placeholder.nodeValue = `${inp} can not be empty`;
          input[inp].classList.add('red-Placeholder')
        }
      }
      return bool;
    }
  }
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div class="greetings">
        <h1 class="green" style="color: hsla(160, 100%, 37%, 1);">Welcome</h1>
        <h3>
          Authentication App~
        </h3>
      </div>

      <nav>
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>
  </header>

  <div class="login-wrapper">
    <img class="user-profile" src="../assets/user_profile.png">

    <form id="login" onsubmit="return false">

      <label class="name" for="email">Username</label>
      <input class="email" required="login[email]" type="text" ref="email" placeholder="Enter Email" autocapitalize="off"
        autocorrect="off" />

      <label class="pass" for="password">Password</label>
      <input class="password" ref="password" type="password" placeholder="***********" />

      <div class="homeView">
        <button id="btn-logIn" ref="login" type="submit" @click="userLogin()">
          login
        </button>
      </div>

      <div class="forgetPwd">
        <p>Forget<a href="#" style="color: rgb(38, 240, 2)"> Password?</a></p>
      </div>

      <div id="login-fail" hidden>
        <p class="login-fail-message" ref="login_fail">Email or Password incorrect! Please try again...</p>
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

.homeView:hover{
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

.forgetPwd{
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

