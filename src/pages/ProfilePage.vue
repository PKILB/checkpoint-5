<template>
    <div v-if="profile" class="container">
        <div class="row mt-4">
            <div class="col-8 m-auto">
                <div class="card">
                    <img :src="profile.coverImg" alt="" class="img-fluid cover-image profile-image">
                    <div class="row">
                        <div class="border-top card-body">
                            <div class="col-1">
                                <img class="profile-picture rounded-circle" :src="profile.picture" :alt="profile.name">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="posts in posts" class="row my-4">
            <PostBlog class="elevation-5" :post="posts" />
        </div>
        <div class="row">
      <div class="col-8 m-auto">
      <button class="btn btn-outline-primary w-25" :disabled="!previousPage" @click="changePage(previousPage)">Previous</button>
      <button class="btn btn-outline-primary w-25"  :disabled="!nextPage" @click="changePage(nextPage)">Next</button>
      </div>
    </div>
    </div>
</template>


<script>
import { onMounted, computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import {profilesService} from '../services/ProfilesService.js'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js';

export default {
    setup(){
        const route = useRoute()
        async function getProfileById() {
            try {
                const profileId = route.params.profileId
                await profilesService.getProfileById(profileId)
            } catch (error) {
                logger.error(error)
                Pop.error(error.message)
            }
        }
        async function getPostsByCreatorId() {
            try {
                const profileId = route.params.profileId
                await postsService.getPostsByQuery({ creatorId: profileId })
            } catch (error) {
                logger.log(error)
                Pop.error(error.message)
            }
        }

        onMounted(() => {
            getProfileById()
            getPostsByCreatorId()
        })

        onUnmounted(() => {
            // getProfileById()

        })

        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts),
            nextPage: computed(() => AppState.nextPage),
            previousPage: computed(() => AppState.previousPage),

            async changePage(url) {
              try {
                await postsService.changePage(url)
              } catch (error) {
                logger.error(error)
                Pop.error(error)
              }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-picture {
    transform: translateY(-7vh);

    height: 10vh;
    width: 10vh;
    border-radius: 50%;
    box-shadow: 2px 2px 4px black;
}
</style>