<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="padding-left:1%; z-index: 999;">
        <a class="navbar-brand" href="#" @click.prevent="homePage()"><img :src="logo" width="30"></a>
        <button @click="toggleMobileMenu" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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

        <div class="mobile-mode" style="width:100%;">
            <ul>
                <li v-if="isAuthenticated" class="nav-item">
                    <router-link class="nav-link" to="/">Dashboard </router-link>
                </li>

                <li v-if="isAuthenticated && user.designation == 1" class="nav-item">
                    <router-link class="nav-link" to="/users">View Users</router-link>
                </li>
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
    import $ from 'jquery';
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
            isOpenMobileMenu : false,
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
                this.$router.push("/");
            },
            toggleMobileMenu () {
                this.isOpenMobileMenu = !this.isOpenMobileMenu;
                if (this.isOpenMobileMenu) {
                    $(".mobile-mode").slideDown();
                } else {
                    $(".mobile-mode").slideUp();
                }
            },
            homePage() {
                this.$router.push("/");
            },
        },
        props: {

        }
    }
</script>
<style>

</style>