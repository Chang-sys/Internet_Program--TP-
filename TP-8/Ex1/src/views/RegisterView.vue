<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    methods: {
        getRegisterElement() {
            return {
                email: this.$refs.email, username: this.$refs.username,
                firstname: this.$refs.firstname, lastname: this.$refs.lastname,
                password: this.$refs.password
            }
        }, getRegisterData() {
            return {
                email: this.$refs.email.value, username: this.$refs.username.value,
                firstname: this.$refs.firstname.value, lastname: this.$refs.lastname.value,
                password: this.$refs.password.value
            }
        },
        registerNewUser() {
            this.isValidInput()
            if (!this.isValidInput()) {
                return;
            } else {
                // this.$refs.registerFail.classList.remove('register-fail')
                document.getElementById('register-fail').hidden = true;
                document.getElementById('success-wrapper').hidden = true;
                fetch('http://localhost:3002/register', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.getRegisterData())
                }).then(async (res, rej) => {
                    const data = await res.json();
                    if (data.success === true) {
                        document.getElementById('success-wrapper').hidden = false;
                    } else {
                        document.getElementById('register-fail').hidden = false;
                    }
                })
            }
        },
        isValidInput() {
            const input = this.getRegisterElement();
            let bool = true;
            for (let inp in input) {
                if (input[inp].value === '') {
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


    <form class="modal-content" onsubmit="return false">
        <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" ref="email" name="email" required>

            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Username" ref="username" name="username" required>

            <label for="First name"><b>First name</b></label>
            <input type="text" placeholder="First name" ref="firstname" name="firstname" required>

            <label for="Last name"><b>Last name</b></label>
            <input type="text" placeholder="Last name" ref="lastname" name="lastname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Create your Password" ref="password" name="pwd" required>

            <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
            <div class="btn">
                <button id="btn-signUp" type="submit" @click="registerNewUser()">Sign Up</button>

                <div id="register-fail" hidden>
                    <div class="register-fail-message">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="waring w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>

                        <p>Email Exists!<br>Sorry, that email address is already <br>associated with an account.</p>
                    </div>
                </div>

                <div id="success-wrapper" ref="success" hidden>
                    <div class="success">
                        <p>Congratulation</p>
                        <p>You have successfully create an account</p>
                        <button @click="this.$router.push('/')">Login Now</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<style>
* {
    box-sizing: border-box;
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

/* Style the horizontal ruler */
hr {
    border: 1px solid black;
    margin-bottom: 25px;
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

/* Full-width input fields */
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

.btn {
    display: flex;
    justify-self: center;
    align-self: center;
    flex-direction: column;
    width: 70%;
    height: 100%;
}

/* Set a style for all buttons */
#btn-signUp {
    background-color: #04AA6D;
    padding: 14px 20px;
    margin: 15px 0;
    border: 2px solid black;
    cursor: pointer;
    opacity: 0.9;
    border-radius: 5px;
    color: white;
    font-size: 20px;
}

#btn-signUp:hover {
    background-color: #15803d;
}

/* The Modal (background) */
.modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: #474e5d;
    padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto;
    /* 5% from the top, 15% from the bottom and centered */
    border: 3px solid rgb(26, 208, 26);
    width: 80%;
}

/* Add padding to container elements */
.container {
    height: 10%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    color: black;
}


.red-Placeholder::placeholder {
    color: red;
}

.waring {
    widows: 24px;
    height: 24px;
    margin: 0 5px 0 0;
    fill: red;
}

.register-fail-message {
    display: flex;
    padding: 5px;
    color: black;
    font-weight: bold;
    height: 100%;
    border: 2px red;
    border-radius: 5px;
    background-color: red;
    border-radius: 5px;
}

#success-wrapper {
    height: fit-content;
}

.success {
    border: 2px solid #38b87e;
    border-radius: 5px;
    background-color: #38b87e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.success>:nth-child(1) {
    font-size: 2rem;
    font-weight: bold;
}

.success>:nth-child(2){
    font-size: 14px;
}

.success>:nth-child(3){
    margin-top: 1rem;
    width: fit-content;
    padding: .5rem 3rem .5rem 3rem;
    background-color: black;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}
</style>
  