<template>
    <form @submit.prevent="registerUser">
        <img class="mb-4" :src="logo" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">User Form</h1>

        <p>Please provide your information on the form below.</p>

        <div class="form-floating">
            <input type="text" @keyup.enter="registerUser()" v-model="registerData.email.value" class="form-control" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
            <div v-if="registerData.email.err" class="error-msg">{{ registerData.email.errmsg }}</div>
        </div>

        <div class="form-floating">
            <input type="text" @keyup.enter="registerUser()" v-model="registerData.username.value" class="form-control" placeholder="Password">
            <label for="floatingInput">Username</label>
            <div v-if="registerData.username.err" class="error-msg">{{ registerData.username.errmsg }}</div>
        </div>

        <div class="form-floating">
            <input type="text" @keyup.enter="registerUser()" v-model="registerData.phone_number.value" class="form-control" placeholder="Password">
            <label for="floatingInput">Phone Number</label>
            <div v-if="registerData.phone_number.err" class="error-msg">{{ registerData.phone_number.errmsg }}</div>
        </div>

        <div class="form-floating">
            <input :type="showPassword1 ? 'text' : 'password'" @keyup.enter="registerUser()" v-model="registerData.password.value" class="form-control" placeholder="Password">
            <label for="floatingInput">Password</label>
            <span class="password-toggle" @click="togglePasswordVisibility1">
                {{ showPassword1 ? 'hide' : 'show' }}
            </span>
            <div v-if="registerData.password.err" class="error-msg">{{ registerData.password.errmsg }}</div>
        </div>

        <div class="form-floating">
            <input :type="showPassword2 ? 'text' : 'password'" @keyup.enter="registerUser()" v-model="registerData.confirmPassword.value" class="form-control" placeholder="Password">
            <label for="floatingInput">Confirm Password</label>
            <span class="password-toggle" @click="togglePasswordVisibility2">
                {{ showPassword2 ? 'hide' : 'show' }}
            </span>
            <div v-if="registerData.confirmPassword.err" class="error-msg">{{ registerData.confirmPassword.errmsg }}</div>
        </div><br>

        <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
    <loading-modal v-if="loading"></loading-modal>
    
</template>
<script>
    import Request from '@/services/request';
    import LoadingModal from '@/components/LoadingModal.vue';
    export default {
        name: "UserForm",
        components : {
            LoadingModal,
        },
        data () {
            return {
                registerData : {
                    email : {
                        value : '',
                        err : false,
                        errmsg : '',
                    },
                    username : {
                        value : '',
                        err : false,
                        errmsg : '',
                    },
                    password : {
                        value : '',
                        err : false,
                        errmsg : '',
                    },
                    confirmPassword : {
                        value : '',
                        err : false,
                        errmsg : '',
                    },
                    phone_number: {
                        value : '',
                        err : false,
                        errmsg : '',
                    },
                },
                logo : require('@/assets/logo.png'),
                requestService : null,
                loading: false,
                showPassword1 : false,
                showPassword2 : false,
            }
        },
        created () {
            this.requestService = new Request();
        },
        mounted () {
            if (this.userdata) {
                for(let user_data in this.userdata) {
                    if (this.registerData[user_data]) {
                        this.registerData[user_data].value = this.userdata[user_data];
                    }
                }
                this.registerData.confirmPassword.value = this.userdata.password;
            }
        },
        props: {
            userdata : {},
            doneSaving : {
                type: Function,
            }
        },
        methods : {
            registerUser () {
                this.loading = true;
                for (let i in this.registerData) {
                    this.registerData[i].err = false;
                }
                const data = {
                    email : this.registerData.email.value,
                    username : this.registerData.username.value,
                    password : this.registerData.password.value,
                    phone_number : this.registerData.phone_number.value,
                }
                
                if (this.registerData.confirmPassword.value !== this.registerData.password.value) {
                    this.registerData.confirmPassword.err = true;
                    this.registerData.confirmPassword.errmsg = "Password must be identical.";
                    this.registerData.password.err = true;
                    this.registerData.password.errmsg = "Password must be identical.";
                    this.loading = false;
                    return;
                }
                const id = this.userdata ? this.userdata.id : null;
                let serverRequestService = this.requestService.registerUser(data, id);
                    serverRequestService.then ( (res) => {
                        console.log(res);
                        this.doneSaving(res);
                    })
                    .catch ( (err) => {
                        err = err.response.data.errors;
                        
                        console.log(err);
                        for (let i in err) {
                            if (this.registerData[i]) {
                                this.registerData[i].err = true;
                                this.registerData[i].errmsg = err[i][0];
                            }
                        }
                    })
                    .finally (()=>{
                        this.loading = false;
                    });
            },
            togglePasswordVisibility1() {
                this.showPassword1 = !this.showPassword1;
            },
            togglePasswordVisibility2() {
                this.showPassword2 = !this.showPassword2;
            }
        }
    }
</script>
<style>
    .form-register {
        width:30%;
        left:35%;
        position:absolute;
        top:7rem;
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

    .error-msg {
        font-size:12px;
        color:red;
        text-align:left;
    }

    .password-toggle {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        cursor: pointer;
        color: #7a7878;
    }
</style>