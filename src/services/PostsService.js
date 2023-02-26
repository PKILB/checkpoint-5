import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"





class PostsService {
    async getPosts() {
        const res = await api.get('api/posts')
        logger.log('getting posts', res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
        AppState.nextPage = res.data.older
        AppState.previousPage = res.data.newer
        // AppState.currentPage = res.data.page
        logger.log(AppState.posts)
    }

    async getPostsByQuery(query) {
        const res = await api.get('api/posts', {params: query })
        logger.log('getting posts by profile', res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
    }

    async createPost(postData) {
        const res = await api.post('api/posts', postData)
        AppState.posts.push(res.data)
        return res.data
    }

    async searchPostsAndProfiles(searchData) {
        const res = await api.get('search/posts', { params: searchData, query: AppState.query})
        logger.log('searching api', res.data)
        AppState.query = searchData.query
        AppState.posts = res.data.results.map(p => new Post(p))
    }

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
}

export const postsService = new PostsService()