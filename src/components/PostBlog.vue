<template>
    <div class="col-8 m-auto border border-dark rounded elevation-2">
        <div class="row">
                    <router-link :to="{name: 'Profile', params: { profileId: post.creatorId}}">
                    <div class="d-flex">
                        <div class="col-1 align-items-center my-3">
                            <img class="profile-picture" :src="post.creator.picture" :alt="post.creator.name">
                        </div>
                        <div class="col-11 me-4 d-flex align-items-center text-start my-3">
                            <h6 class="ms-3">{{ post.creator.name }}</h6>
                        </div>
                    </div>
                </router-link>
                
                    <div class="col-12 text-end">
                        <p class="me-2">11:26 p.m.</p>
                    </div>
                    <div class="ms-3">
                        <p>{{ post.body }}</p>
                    </div>
                    <div class="col-12">
                        <img class="post-image img-fluid" h-10vh :src="post.img" alt="">
                    </div>

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