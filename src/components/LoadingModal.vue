<template>
    <div class="modal user-dialog" tabindex="-1" style="display:block">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <!-- Modal content -->
                <div class="modal-header">
                    <h4>Loading...</h4>
                </div>
                <div class="modal-body">
                    <img :src="loadingGif" width="400"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    //import Request from '@/services/request';
    export default {
        components : {
        },
        data () {
            return {
                loadingGif : require('@/assets/loading.gif'),
            }
        },
        created () {
        },
        mounted () {
        },
        name: "LoadingModal",
        props: {
        },
        methods : {
        }
    }
</script>
<style>
  .user-dialog {
    background: #00000080;
    display: block;
  }
</style>