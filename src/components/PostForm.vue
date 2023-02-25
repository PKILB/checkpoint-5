<template>
    <form>
        <div class="col-8 border border-dark m-auto">
            <div class="row d-flex align-items-center">
                <div class="col-2">
                    <img class="ms-4 rounded-circle" :src="profile?.picture" alt="">
                </div>
                <div class="col-10 mt-5 text-center">
                    <textarea required name="body" id="body" cols="45" rows="4" placeholder="Share what's happening here....."></textarea>
                </div>
                <div class="col-12">
                    <div class="text-start d-flex justify-content-start align-items-center">
                        <h6 class="ms-4">Photos/Videos</h6>
                    </div>
                    <div class="flex-grow-1 text-end align-items-center">
                        <button type="submit" class="col-2 btn btn-primary text-center my-3 mx-4">
                            <h6>Post</h6>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
    
    setup(){

        // onMounted(() => {
        //     getProfileById()
        // })
        return {
            profile: computed(() => AppState.account)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>