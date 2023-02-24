<template>
    <div class="col-12 border border-dark rounded">
        <div class="row">
                    <!-- <router-link :to="{name: 'Profile', params: { profileId: post.creatorId}}"> -->
                    <div class="col-12 d-flex align-items-center my-3">
                        <img class="profile-picture" :src="post.creator.picture" :alt="post.creator.name">
                        <h6 class="ms-3">{{ post.creator.name }}</h6>
                    </div>
                    <p>{{ post.body }}</p>
                    <!-- </router-link> -->

                <div class="col-12 text-end">
                    <h2>Likes</h2>
                </div>
            </div>
    </div>
</template>


<script>
import { Post } from '../models/Post.js';



export default {

    props: {
        post: {
            type: Post,
            required: true
        }
    },

    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>
.profile-picture {
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
    box-shadow: 2px 2px 4px black;
}
</style>