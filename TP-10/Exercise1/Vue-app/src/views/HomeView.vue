<script>
export default {
  name: "HomeView",
  data: {
    returns: {
      firstname: "",
      lastname: "",
      email: "",
    }
  },
  async mounted(){

  },
  methods: {
    async logout() {
      this.isLogin = false;
      await fetch('http://localhost:3001/logout', {
        method: 'POST',
        credentials: 'include',
      }).then(res => {
        return res.json()
      }).then(data => {
        if (data.success == true) {
          localStorage.removeItem('token', res.data.token);
          this.$router.push({ path: '/' })
        }
      })
    },
    created() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$router.push('/');
      } else {
        this.isLogin = true;
      }
    },
  }
}
</script>

<template>
  <div class="content">
    <div class="headerHome">
      <div class="logo-wrapper">
        <img src="https://gic.itc.edu.kh/img/logo.png" alt="" class="imageLogo">
        <h2 class="textLogo">GIC</h2>
      </div>
      <nav class="navigation">
        <a href="#">ABOUT</a>
        <a href="#">ACADEMICS</a>
        <a href="#">WHY&nbsp;GIC</a>
        <a href="#">LIFE&nbsp;GIC</a>
        <a href="#">ACADEMICS</a>
        <a href="#">CONTACT</a>
        <div class="searchBar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <div class="verticalLine"></div>
        <button class="btnLogout-popup" @click="logout">
          Logout
        </button>
      </nav>
    </div>

    <div class="body-wrapper">
      <div class="left-content">
        <h1>Deep Learning Through Deep Connection</h1>
        <h5>Taking a deep drive</h5>

        <p>The learning journey start here.Become a learning legend.</p>
        <button id="btn-getStart">
          GET STARTED
        </button>
        <p>Elavate your experience. Empower the next generation.</p>
        <a class="link" href="#">JOIN OUR TEAM</a>
      </div>

      <div class="right-content">

        <div class="box col-1"></div>

        <div class="box col-2">
          <!-- image -->
        </div>

        <div class="box col-3"></div>

        <div class="box col-4">
          <!-- image -->
        </div>

        <div class="box col-5"></div>

        <div class="box col-7"></div>

        <div class="box col-8"></div>

        <div class="box col-9">
          <!-- imge    -->
        </div>

        <div class="box col-10"></div>

        <div class="box col-11">
          <!-- image -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Avestan&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans Avestan', sans-serif;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  /* margin: 0 0 0 60px; */
}

@media (min-width: 1529px) {
  .content {
    margin: 0 0 0 200px;
  }
}

.headerHome {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-wrapper {
  height: fit-content;
  text-align: center;
  display: flex;
  gap: 20px;
  cursor: pointer;
  margin-right: 60px;
}

.imageLogo {
  width: 100px;
  height: 80px;
}

.textLogo {
  padding-top: 10px;
  font-size: 3rem;
  color: grey;
  font-weight: 700;
  letter-spacing: 0.05em;
  user-select: none;
  font-family: 'Alfa Slab One', cursive;
}

.navigation {
  margin: 0 0 0 40px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.navigation a {
  color: black;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  border-style: none;
}

.navigation a::after {
  content: ' ';
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
}


.navigation a:hover {
  background: white;
  text-decoration: underline;
}

.navigation .btnLogout-popup {
  font-family: 'Alfa Slab One', cursive;
  width: 130px;
  height: 50px;
  outline: none;
  border-style: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 0.05em;
  color: #fb7185;
  background-color: white;
}

.navigation .btnLogout-popup:hover {
  background: #fff;
  text-decoration: underline;
}

.searchBar {
  width: 46px;
  margin: 0 0px 0 50px;
}

.verticalLine {
  width: 3px;
  height: 46px;
  background-color: black;
}

.body-wrapper {
  margin-top: 30px;
  width: 96%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  column-gap: 100px;
}

/* left-content */
.left-content {
  width: 37%;
  display: flex;
  flex-direction: column;
}

.left-content h1 {
  font-family: 'Roboto Slab', serif;
  font-size: 46px;
  font-weight: 600;
}

.left-content h5 {
  margin: 10px 0 30px 0;
  font-size: 25px;
  font-weight: 300;
  font-style: italic;
}

#btn-getStart {
  width: 60%;
  height: 50px;
  margin: 25px 0 35px 0;
  font-size: 20px;
  color: white;
  background-color: #fb7185;
  border-style: none;
  border-radius: 8px;
  cursor: pointer;
}

.link {
  margin: 20px 0 20px 0;
  color: black;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  text-decoration: underline 2px;
  text-decoration-color: black;
  text-underline-offset: 5px;
  margin-bottom: 4em;
}


/* right-content */
.right-content {
  width: 70%;
  margin: 0 0 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, [row] auto);
  grid-template-areas:
    "a b c d"
    "e b g h"
    "i j k k";
}

.box {
  width: 100%;
  height: 100%;
  background-color: white;
  /* padding: 20px;
    font-size: 150%; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-1 {
  background-color: #fcb0bb;
  grid-area: a;
  border-top-right-radius: 9999px;
}

.col-2 {
  grid-area: b;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  background: url('https://c.stocksy.com/a/eAmB00/z9/2806780.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}

.col-3 {
  background-color: #fecb8b;
  grid-area: c;
  clip-path: polygon(100% 0, 0 100%, 0 0);
}

.col-4 {
  grid-area: d;
  border-top-right-radius: 9999px;
  background: url('https://c.stocksy.com/a/iG9700/z8/1703928.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}

.box:hover .col-4,
.box:focus .col-4 {
  transform: scale(1.2);
}

.col-5 {
  background-color: #95d9eb;
  border-bottom-left-radius: 9999px;
}

.col-7 {
  background-color: #ffa58c;
  grid-area: g;
  border-bottom-left-radius: 9999px;
}

.col-8 {
  background-color: #eeeeee;
  grid-area: h;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}

.col-9 {
  grid-area: i;
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  background: url('https://c.stocksy.com/a/ZMo400/z3/1146911.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}

.col-10 {
  background-color: #d7b9e4;
  grid-area: j;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}

.col-11 {
  grid-area: k;
  border-top-right-radius: 9999px;
  background: url('https://rusinfo.info/wp-content/uploads/5/a/c/5ac95302b3b37a1a03d44c72e221a2e8.png') no-repeat;
  background-size: cover;
  /* background-position: center; */
}
</style>
