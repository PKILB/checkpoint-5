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

    
    async createPost(postData) {
        const res = await api.post('api/posts', postData)
        AppState.posts.push(res.data)
        // if(!post){
            //     throw new Error('Login!!')
            // }
            return res.data
        }
        
        async searchPosts(searchData) {
            const res = await api.get('api/posts', { params: searchData })
            logger.log('searching api', res.data)
            AppState.query = searchData.query
            AppState.posts = res.data.posts.map(p => new Post(p))
            AppState.nextPage = res.data.older
            AppState.previousPage = res.data.newer
        }

        async changePageByQuery(url) {
            const res = await api.get('api/posts', url + { params: { query: AppState.query }})
            logger.log('changing page', res.data)
            AppState.posts = res.data.posts.map(p => new Post(p))
            AppState.nextPage = res.data.older
            AppState.previousPage = res.data.newer
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

    // async likePost(postId) {
    //     let res = await api.post('api/posts/' + post.id)
    // }


    async removePost(postId) {
        const res = await api.delete('api/posts' + postId)
        let i = AppState.posts.findIndex(p => p.id == postId)
        if (i != -1) {
            AppState.posts.splice(i, 1)
        }
    }
}

export const postsService = new PostsService()