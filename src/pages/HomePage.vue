<template>
  <div class="container-fluid">
    <div class="row my-4">
      <PostForm />
    </div>
    <div v-for="p in posts" class="row my-4">
      <PostBlog :post="p" />
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
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import {postsService} from '../services/PostsService.js'
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
import PostBlog from '../components/PostBlog.vue';
// import { Profile } from '../models/Account.js';

export default {
    setup() {
        async function getPosts() {
            try {
                await postsService.getPosts();
            }
            catch (error) {
                logger.error(error);
                Pop.error(error.message);
            }
        }
        onMounted(() => {
            getPosts();
        });
        return {
            posts: computed(() => AppState.posts),
            nextPage: computed(() => AppState.nextPage),
            previousPage: computed(() => AppState.previousPage),
            // currentPage: computed(() => AppState.currentPage),

            async changePage(url) {
              try {
                await postsService.changePage(url)
              } catch (error) {
                logger.error(error)
                Pop.error(error)
              }
            }
        };
    },
    components: { PostBlog }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
