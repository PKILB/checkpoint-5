<template>
    <div v-if="profile" class="container">
        <div class="row mt-4">
            <div class="col-12">
                <div class="card rounded">
                    <img :src="profile.coverImg" alt="" class="img-fluid cover-image profile-image">
                    <div class="row">
                        <div class="border-top d-flex">
                            <div class="col-1 ps-2">
                                <img class="profile-picture rounded-circle" :src="profile.picture" :alt="profile.name">
                            </div>
                            <div class="col-11 text-end fs-1 mb-5 pe-3">
                                <span v-if="profile.github">
                                    <a :href="profile.github" target="_blank">
                                        <i class="mdi mdi-github"></i>
                                    </a>
                                </span>
                                <span v-if="profile.linkedin">
                                    <a :href="profile.linkedin" target="_blank">
                                        <i class="mdi mdi-linkedin"></i>
                                    </a>
                                </span>
                            </div>

                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-1">
                            <span :class="${profile.graduated ? '' : ''}"></span>
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col-2">
                            <div class="ms-3">
                                <h4 class="">{{ profile.class }}</h4>
                            </div>
                        </div>
                        <div class="col-12 text-start ps-3">
                            <h2>
                                <span :class="`${profile.graduated ? 'sick-font' : ''}`">
                                    {{ profile.name }}
                                </span>
                            </h2>
                        </div>
                        <div class="col-12">
                            <p>{{ profile.bio }}</p>
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

.sick-font {
    font-family: 'Tilt Prism', cursive ;
    font-size: 2em;
}
.cover-image {
    height: 40vh;
    width: 100%;
    object-fit: cover;
}
.profile-picture {
    transform: translateY(-7vh);

    height: 15vh;
    width: 15vh;
    border-radius: 50%;
    box-shadow: 2px 2px 4px black;

.icon-size {
    height: 3vh;
    width: 3vh;
    border-radius: 50%;
    box-shadow: 2px 2px 2px black;
}
}
</style>