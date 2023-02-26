<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <!-- <div class="row mt-4">
            <div class="col-8 m-auto">
              <img class="rounded-circle" :src="profile.picture" :alt="profile.name">
            </div>
          </div> -->
        </div>
        <!-- <SideProfile /> -->
        <div class="col-8">
          <router-view />
        </div>
        <div class="col-2">
          <Ads />
        </div>
      </div>
      </div>

    
  </main>
   <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Ads from './components/Ads.vue'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Ads }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
