<template>
    <div class="col-12">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <!-- <router-link :to="{name: 'Profile', params: { profileId: post.creatorId}}"> -->
                    <div class="col-12 d-flex align-items-center my-3">
                        <img :src="post.creator.picture" :alt="post.creator.name">
                        <h6 class="ms-3">{{ post.creator.name }}</h6>
                    </div>
                    <!-- </router-link> -->
                </div>

                <div class="col-12">
                    <p>{{ post.body }}</p>
                </div>
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

</style>