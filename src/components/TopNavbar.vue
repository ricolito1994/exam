<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="padding-left:1%;">
        <a class="navbar-brand" href="#"><img :src="logo" width="30"></a>
 
        <div class="collapse navbar-collapse" >
            <ul class="navbar-nav mr-auto">
                <li v-if="isAuthenticated" class="nav-item">
                    <router-link class="nav-link" to="/">Dashboard </router-link>
                </li>

                <li v-if="isAuthenticated && user.designation == 1" class="nav-item">
                    <router-link class="nav-link" to="/users">View Users</router-link>
                </li>
            </ul>
        </div>

        <div class="navbar-collapse collapse justify-content-end">
            <ul class="navbar-nav">
                <li v-if="isAuthenticated && user.designation == 0" class="nav-item">
                    <a href='#' class="nav-link" @click.prevent="unsubscribe(user.id)">Unsubscribe</a>
                </li>
                <li v-if="isAuthenticated" class="nav-item">
                    <a href='#' class="nav-link" @click.prevent="logout()">Logout</a>
                </li>
                <li v-if="!isAuthenticated" class="nav-item">
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>
                <li v-if="!isAuthenticated" class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    import Request from '@/services/request';
    export default {
        name: "TopNavbar",
        computed : {
            user () {
                return this.$store.state.user;
            },
            isAuthenticated () {
                return this.$store.state.isAuthenticated;
            }
        },
        data () {
          return {
            logo : require('@/assets/logo.png'),
            requestService: null,
          }
        },
        mounted () {
            this.requestService = new Request();
        },
        methods : {
            unsubscribe (userid) {
                this.requestService.unsubscribe(userid)
                    .then ( res => {
                        console.log(res);
                        this.logout();
                    })
                    .catch ( err => {
                        console.error(err);
                    })
            },
            logout () {
                this.$store.dispatch('logoutUser');
                this.$router.push("/login");
            },
        },
        props: {

        }
    }
</script>
<style>

</style>