<template>
    <main class="form-signin w-0 m-auto">
        <form @submit.prevent="login">
            <img class="mb-4" :src="logo" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
              <input type="username" v-model="username" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>

            <div class="form-floating">
              <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>

            <!--<div class="checkbox mb-3">
              <label>
                  <br><input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>-->
            <br>
            <div v-if="loginError" class="alert alert-danger" role="alert">
              Invalid username or password!
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
        </form>
        <loading-modal v-if="loading"></loading-modal>
    </main>
</template>
<script>
    import Request from '@/services/request';
    import LoadingModal from '@/components/LoadingModal.vue';
    export default {
        components : {
          LoadingModal,
        },
        computed : {
        },
        data () {
          return {
            username : '',
            password : '',
            logo : require('@/assets/logo.png'),
            requestService : null,
            loginError : false,
            loading: false,
          }
        },
        created () {
          this.requestService = new Request();
        },
        name: "LoginPage",
        props: {
          
        },
        methods : {
          login () {
            const data = {
              username : this.username,
              password : this.password,
            }
            this.loading = true;
            let serverRequest = this.requestService.authUser(data);
                serverRequest.then ( (res) => {
                    if(res) {
                      this.$store.dispatch('authUser', res);
                      this.$router.push('/');
                    } else {
                      this.loginError = true;
                    }
                })
                .catch ( (err) => {
                    console.log(err)
                    this.loginError = true;
                })
                .finally(()=>{
                  this.loading = false;
                });
          },
        }
    }
</script>
<style>
    .form-signin {
      width:30%;
      left:35%;
      position:absolute;
      top:10rem;
      border:1px solid #ccc;
      padding:2%;
    }
    
    .form-floating {
      margin-top:2%;
    }

    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

   

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }
      .bd-mode-toggle {
        z-index: 1500;
      }
    @media (max-width: 900px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }

      .form-signin {
        width:80%;
        left:10%;
        top:10%;
      }
    }
</style>