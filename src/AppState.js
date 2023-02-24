import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  
  /** @type {import('./models/Post.js').Post[]} */
  posts: [],
  
  /** @type {import('./models/Post.js').Post|null} */
  post: {},
  
  /** @type {Number} */
  currentPage: 1,
  
  /** @type {Number} */
  nextPage: null,
  
  /** @type {Number} */
  previousPage: null,
  
  /** @type {import('./models/Profile.js').Profile|null} */
  profile: null
})
