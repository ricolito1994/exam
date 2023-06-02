<template>
  <main id="main-container">
    <div>
      <h1>PAGE NOT FOUND</h1>
      <p>The URL you requested is invalid. You may:</p>
      <button v-if="!isAuthenticated" @click="redirect('/login')" class="btn btn-primary">Login</button>&nbsp; 
      <button v-if="!isAuthenticated" @click="redirect('/register')" class="btn btn-primary">Register</button>
      <button v-if="isAuthenticated" @click="redirect('/')" class="btn btn-primary">Go Back to Dashboard</button>
    </div>
  </main>
</template>

<script>

export default {
  name: 'DashBoard',
  computed : {
    user () {
      return this.$store.state.user ? this.$store.state.user : null;
    },
    isAuthenticated () {
      return this.$store.state.isAuthenticated;
    }
  },
  methods : {
    redirect (page) {
        this.$router.push(`${page}`);
    }
  },
  components : {
    
  },
  props: {
    msg: String
  }
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

#main-container div {
    margin-top:10%;
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
