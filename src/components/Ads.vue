<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-12 my-3">
<div v-for="ad in ads" class="mb-3">
    <!-- <p>Hello 2</p> -->
    <!-- <p >{{ ad.tall }}</p> -->
    <img class="img-fluid" :src="ad.tall" alt="">

</div>

                        <!-- <link rel="ad" :href="ad.link"> -->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import {adsService} from '../services/AdsService.js'
import { AppState } from '../AppState.js';
import { Ad } from '../models/Ad.js';


export default {
    // props: {
    //     ad: {
    //         type: Ad,
    //         required: true
    //     }
    // },

    setup(){
        async function getAds() {
            try {
                await adsService.getAds()
            } catch (error) {
                logger.error(error)
                Pop.error(error.message)
            }
        }
        
        onMounted(() => {
            getAds()
        })

        
        return {
            ads: computed(() => AppState.ads)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>