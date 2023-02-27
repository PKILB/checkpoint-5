import { AppState } from "../AppState.js"
import { Profile } from "../models/Account.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"




class ProfilesService {
async getProfileById(profileId) {
    const res = await api.get('api/profiles/' + profileId)
    logger.log('getting profile', res.data)
    AppState.profile = new Profile(res.data)
}

// async changePageByQuery(url) {
//     const res = await api

// }

async changePage(url) {
    console.log(url)
    const res = await api.get(url)
    console.log(res)
    logger.log('[Change Page]', res.data)
    // AppState.currentPage = res.data.next
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older

    // AppState.currentPage = res.data.next
    AppState.previousPage = res.data.newer
}

// async searchProfiles(searchData) {
//     const res = await api.get('search/profiles', { params: searchData, query: AppState.query})
//     logger.log('searching api', res.data)
//     AppState.query = searchData.query
//     AppState.profiles = res.data.results.map(p => new Profile(p))
//     AppState.nextPage = res.data.older
// }
}

export const profilesService = new ProfilesService()