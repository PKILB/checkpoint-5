<template>
    <form>
        <div class="col-8 border border-dark m-auto">
            <div class="row">
                <div class="col-2">
                    <!-- <img :src="profile.picture" alt=""> -->
                </div>
                <div class="col-10 mt-5">
                    <!-- <label for="body" class="form-label">Body</label> -->
                    <textarea required name="body" id="body" cols="60" rows="5" placeholder="Share what's happening here....."></textarea>
                </div>
                <div class="col-12">
                    <div class="d-flex align-items-center">
                        <h6 class="">Photos/Videos</h6>
                    </div>
                    <div class="flex-grow-1 text-end align-items-center">
                        <button type="submit" class="col-2 btn btn-primary text-center my-3 mx-4">
                            <h6>Post</h6>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>


<script>
export default {
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>