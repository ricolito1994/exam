<template>
    <main id="main-container">
      <div style="width:100%;">
        <h4>Registered Users</h4>
      </div>
      <div class="users-table-container">
        <table class="my-table">
            <thead>
                <tr class="bg-dark">
                    <th>Username</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Designation</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone_number }}</td>
                    <td>{{ user.designation == 0 ? 'Guest' : 'Admin' }}</td>
                    <td>
                      <button @click.prevent="editUser(user.id)" class="btn btn-secondary btn-user-table"  data-bs-toggle="tooltip" data-bs-placement="top" title="Edit User">&#9997;</button>&nbsp; 
                      <button v-if="user.designation == 0" @click.prevent="deleteUser(user.id)" class="btn btn-secondary btn-user-table" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete User">&#x274C;</button>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
      <user-modal :user="user" :closeDialog="closeDialog" v-if="isUserDialogOpen"></user-modal>
    </main>
  </template>
  <script>
  import Request from '@/services/request';
  import UserModal from '@/components/UserModal.vue';

  export default {
    name: 'UsersPage',
    components : {
      UserModal
    },
    computed : {
    },
    data () {
       return {
        requestService :null,
        users : [],
        user : {},
        isUserDialogOpen : false,
       } 
    },
    mounted () {
        this.loadUsers();
    },
    methods : {
      closeDialog () {
        this.isUserDialogOpen = false;
        this.loadUsers();
      },
      editUser(userid) {
        this.requestService.users(userid).then ( (res) => {
            console.log(res);
            this.user = res;
            this.isUserDialogOpen = true;
        })
        .catch(err => {
            console.error(err);
        })
      },
      deleteUser(userid) {
        if (!confirm(`Are you sure you want to delete this user:${userid}?`))
          return;
        this.requestService.unsubscribe(userid)
            .then ( res => {
              console.log(res);
              this.loadUsers();
            })
            .catch ( err => {
              console.error(err);
            })
      },
      loadUsers () {
        this.requestService = new Request();
        this.requestService.users().then ( (res) => {
          this.users = res;
        })
        .catch(err => {
          console.error(err);
        })
      }
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
  
  #main-container div {
    float:left;
  }

  .users-table-container {
    height: 90%;
    width: 100%;
    border:1px solid #ccc;
    overflow-x: scroll;
    font-size: 15px;
  }

  .my-table{
    width: 100%;
  }

  .my-table thead th {
    padding:1%;
    color: white;
  }
  .my-table tbody td {
    background-color: rgb(119 203 152 / 86%);;
    padding:1%;
    color: black;
  }

  .btn-user-table {
    padding:1%;
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
  