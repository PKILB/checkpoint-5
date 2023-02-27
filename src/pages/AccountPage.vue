<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

  <form @submit.prevent="editAccount">
          <div class="mb-3">
            <label for="name" class="form-label">name</label>
            <input required v-model="editable.name" type="text" :placeholder="profile.name" class="form-control" id="name" name="name">
          </div>
          <div class="mb-3">
            <label for="bio" class="form-label">bio</label>
            <input v-model="editable.bio" type="text" :placeholder="profile.bio" class="form-control" id="bio">
          </div>
          <div class="mb-3">
            <label for="picture" class="form-label">picture</label>
            <input required v-model="editable.picture" type="url" :placeholder="profile.picture" class="form-control" id="picture">
          </div>
          <div class="mb-3">
            <label for="coverImg" class="form-label">coverImg</label>
            <input required v-model="editable.coverImg" type="url" :placeholder="profile.coverImg" class="form-control" id="coverImg">
          </div>
          <div class="mb-3">
            <label for="github" class="form-label">github</label>
            <input v-model="editable.github" type="url" :placeholder="profile.github" class="form-control" id="github">
          </div>
          <div class="mb-3">
            <label for="linkedin" class="form-label">LinkedIn</label>
            <input v-model="editable.linkedin" type="url" :placeholder="profile.linkedin" class="form-control" id="linkedin">
          </div>
          <div class="mb-3">
            <label for="class" class="form-label">Class</label>
            <input v-model="editable.class" type="text" :placeholder="profile.class" class="form-control" id="class">
          </div>
          <div class="form-check mb-3">
            <input v-model="editable.graduated" :checked="editable.graduated" class="form-check-input" type="checkbox"
              id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Graduated
            </label>
          </div>
          <button class="btn btn-secondary mb-3" type="submit">Save</button>

        </form>
</template>

<script>
import { computed, watchEffect, ref } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { accountService } from '../services/AccountService.js'
export default {
  setup() {
    const editable = ref({})

    watchEffect(() => {
      if(AppState.profile.id) {

        editable.value = {...AppState.profile}
      }
    })
    return {
      editable,
      account: computed(() => AppState.account),
      profile: computed(() => AppState.account),
      async editAccount() {
        try {
          const formData = editable.value
          await accountService.editAccount(formData)
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
