<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
            <div class="row mt-4">
              <div class="col-12">
                <img class=" img-fluid profile-picture" :src="profile.picture" :alt="profile.name">
              </div>
              <div class="row mt-4">
                <h6>{{ profile.class }}</h6>
              </div>
              <div class="row mt-2">
                <div class="col-12 text-start">
                  <span :class="`${profile.graduated ? 'sick-font' : ''}`">
                    <h3>{{ profile.name }}</h3>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-12 fs-1">
                  <span v-if="profile.github">
                    <a :href="profile.github" target="_blank">
                      <i class="mdi mdi-github"></i>
                    </a>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-12 fs-1">
                  <span v-if="profile.linkedin">
                    <a :href="profile.linkedin" target="_blank">
                      <i class="mdi mdi-linkedin"></i>
                    </a>
                  </span>
                </div>
              </div>

            </div>
          </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState.js';
import {computed} from 'vue'

export default {
    setup(){
        
        return {
            profile: computed(() => AppState.profile)
        }
    }
}
</script>


<style lang="scss" scoped>
.sick-font {
    font-family: 'Tilt Prism', cursive ;
    font-size: 2em;
}
.profile-picture {
    height: 30vh;
    width: 30vh;
    border-radius: 50%;
    box-shadow: 2px 2px 4px black;
}


</style>