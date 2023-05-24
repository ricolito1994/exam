<template>
  <main id="main-container">
    <div>
      <h4>Welcome {{ user ? user.username : "" }}</h4>
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
  float:left;
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
