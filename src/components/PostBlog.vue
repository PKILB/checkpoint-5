<template>
    <div class="col-8 m-auto border border-dark rounded elevation-2">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-1 d-flex align-items-center my-3">
                        <router-link :to="{name: 'Profile', params: { profileId: post.creatorId}}">
                            <img class="profile-picture" :src="post.creator.picture" :alt="post.creator.name">
                        </router-link>
                    </div>
                    <div class="col-2 d-flex ms-4 align-items-center my-3 text-start">
                        <h6 class="text-start">{{ post.creator.name }}</h6>
                    </div>
                    
                </div>
            </div>
                
                <div class="col-12 text-end">
                    <p class="me-2">{{ post.createdAt }}</p>
                </div>
                <div class="ms-3">
                    <p>{{ post.body }}</p>
                </div>
                <div class="col-12">
                    <img class="post-image img-fluid" h-10vh :src="post.img" alt="Broken">
                </div>

                <div class="col-12">
                    <div class="row mt-3">
                        <div class="col-6 text-start">
                            <h2>Likes</h2>
                        </div>
                        <div class="col-6 text-end">
                            <button @click="removePost" class="btn btn-outline-danger">
                                <i class="mdi mdi-delete"></i>
                            </button>
                        </div>
                    </div>
                </div>

                </div>
            </div>
</template>


<script>
// import { computed } from 'vue';
// import { useRoute } from 'vue-router';
// import { AppState } from '../AppState.js';
import { AppState } from '../AppState.js';
import { Profile } from '../models/Account.js';
import { Post } from '../models/Post.js';
// import { router } from '../router.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';



export default {

    props: {
        post: {
            type: Post,
            required: true
        },

        // profile: {
        //     type: Profile,
        //     required: true
        // }
    },


    setup(){
        // const route = useRoute()
        const postId = AppState.post.id

        return {
            postId,
            // account: computed(() => AppState.account),
            // post: computed(() => AppState.post),

            async removePost() {
                try {
                    await postsService.removePost(postId)
                    router.push({ name: 'Posts' })
                } catch (error) {
                    Pop.error(error, '[Removing Post]')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-picture {
    height: 9vh;
    width: 9vh;
    border-radius: 50%;
    box-shadow: 2px 2px 4px black;
}

.post-image {
    height: 75vh;
    width: 100%;
}
</style>