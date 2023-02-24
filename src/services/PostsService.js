import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"





class PostsService {
    async getPosts() {
        const res = await api.get('api/posts')
        logger.log('getting posts', res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
        // AppState.nextPage = res.data.nextPage
        // AppState.previousPage = res.data.previousPage
        logger.log(AppState.posts)
    }

    // async changePage(url) {
    //     const res = await api.get(url)
    //     logger.log('[Change Page]', res.data)
    //     AppState.nextPage = res.data.nextPage
    //     AppState.previousPage = res.data.previousPage
    //     AppState.posts = res.data.
    // }
}

export const postsService = new PostsService()