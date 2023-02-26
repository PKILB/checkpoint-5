<template>
    <!-- <div class="col-2">
          <div class="row mt-4">
            <div class="col-8 m-auto">
              <img class="rounded-circle" :src="profile.picture" :alt="profile.name">
            </div>
          </div>
        </div> -->
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

</style>