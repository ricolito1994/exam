<template>
    <div class="modal user-dialog" tabindex="-1" style="display:block">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <!-- Modal content -->
                <div class="modal-header">
                </div>
                <div class="modal-body">
                    <user-form :userdata="user" :done-saving="doneSaving"></user-form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeUserDialog">Close</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
    //import Request from '@/services/request';
    import UserForm from '@/components/UserForm.vue';
    export default {
        components : {
            UserForm,
        },
        data () {
            return {
            }
        },
        created () {
        },
        mounted () {
        },
        name: "UserModal",
        props: {
            user : {},
            isUserDialogOpen: {
                type : Boolean,
            },
            closeDialog: {
                type: Function,
            },
            saveUser : {
                type : Function,
            },
        },
        methods : {
            doneSaving (res) {
                this.saveUser(res)
            },
            closeUserDialog () {
                this.closeDialog()
            },
            registerUser () {
            }
        }
    }
</script>
<style>
  .user-dialog {
    background: #00000080;
    display: block;
  }
</style>