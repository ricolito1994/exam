<template>
  <main id="main-container">
    <div v-if="isAuthenticated" id="welcome-banner">
      <div id="image-profile-banner">
        <img :src="profileImage" />
      </div>
      <div id="details-banner">
        <div id="welcome"><h2>Welcome {{ user ? user.username : "" }}</h2></div>
        <div class="option-details"><p><em>Welcome to dashboard.</em></p></div>
      </div>
    </div>
    <div v-if="!isAuthenticated">
      <img :src="logo" />
      <h3>WELCOME</h3>
      <div>
        <p>
          <em>
            Growmodo programming challenge basic CRUD using PHP/LARAVEL and VUEJS.
          </em>
        </p>
      </div>
      <div>
        <br>
        <button @click="redirect('/login')" class="btn btn-primary">Login</button>&nbsp;
        <button @click="redirect('/register')" class="btn btn-primary">Register</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'DashBoard',
  data () {
    return {
      logo : require('@/assets/logo.png'),
    }
  },
  computed : {
    user () {
      return this.$store.state.user ? this.$store.state.user : null;
    },
    isAuthenticated () {
      return this.$store.state.isAuthenticated;
    },
    profileImage () {
      return require('@/assets/profile.jpg');
    }
  },
  methods: {
    redirect(page) {
      this.$router.push(page);
    },
  },
  created () {
  },
  components : {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-container {
  width:95%;
  height:85%;
  margin-left:2.5%;
  margin-top:2%;
  border:1px solid #ccc;
  padding: 1%;
}

#main-container #welcome-banner {
  height: 30%;
  width: 100%;
}

#main-container #welcome-banner #image-profile-banner {
  float:left;
  width: 15%;
  height: 100%;
}
#main-container #welcome-banner #image-profile-banner img {
  float:right;
  width: 100%;
  
}

#main-container #welcome-banner #details-banner {
  width:85%;
  margin-left:15%;
  height:100%;
  padding: 0.6%;
}

#main-container #welcome-banner #details-banner div {
  float: left;
  width: 100%;
  text-align: left;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
