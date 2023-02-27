<template>
    <form @submit.prevent="handleSubmit">
        <div class="col-10 border border-dark m-auto">
            <div class="row d-flex align-items-center">
                <div class="col-2">
                    <img class="ms-5 mb-3 rounded-circle" :src="profile?.picture" alt="">
                </div>
                <div class="col-10 mt-5 text-center">
                    <textarea required name="body" v-model="editable.body" id="body" cols="55" rows="7" placeholder="Share what's happening here....."></textarea>
                </div>
                <div class="col-2">
                </div>
                <div class="col-10 d-flex">
                    <div class="text-start justify-content-start align-items-center mt-3">
                        <input required type="text" v-model="editable.img" class="form-control w-20" id="img" placeholder="Pictures"
                        name="imgUrl">
                    </div>
                    <div class="flex-grow-1 text-end justify-content-end align-items-center">
                        <button type="submit" class="col-2 btn btn-outline-primary text-center my-3 mx-4">
                            Post
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
// import { Post } from '../models/Post.js';
import { router } from '../router.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import { ref } from 'vue';

export default {
    
    setup(){
        const editable = ref({})

        // onMounted(() => {
        //     getProfileById()
        // })
        return {
            editable,
            profile: computed(() => AppState.account),

            async handleSubmit() {
                try {
                    window.event.preventDefault()
                    // let form = window.event.target
                    const post = editable.value.id
                        await postsService.createPost(editable.value)

                        editable.value = {}
                        if(post?.id) {
                            router.push({ name: 'Post', params: { postId: post.id } })
                        }
                } catch (error) {
                    Pop.error('You Need To Login!!')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>