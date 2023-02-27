<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-color px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Internet-icon.svg/2048px-Internet-icon.svg.png" height="45" />
        <!-- <h1>Network</h1> -->
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-flex flex-grow-1">
      <form @submit.prevent="searchPostsAndProfiles()">
      <div class="input-group">
        <input v-model="editable.query" required type="text" class="form-control" placeholder="Search posts or profiles"
        aria-label="Search posts or profiles" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
          <i class="mdi mdi-magnify"></i>
        </button>
      </div>
      </form>
    </div>
    <div class="collapse navbar-collapse" id="navbarText">
      
      <ul class="navbar-nav me-auto">
        <li>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue';
import { postsService } from '../services/PostsService.js';
import { profilesService } from '../services/ProfilesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import Login from './Login.vue'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts),
      
      async searchPostsAndProfiles() {
        try {
          let searchData = editable.value
          await postsService.searchPosts(searchData)
          await profilesService.searchProfiles(searchData)
          editable.value = {}
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}

.bg-color {
  background-color: #77bce4;
}

</style>
