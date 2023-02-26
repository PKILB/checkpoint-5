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
  
  /** @type {import('./models/Ad.js').Ad[]} */
  ads: [],
  
  /** @type {import('./models/Ad.js').Ad} */
  ad: {},
  
  /** @type {Number} */
  nextPage: 0,
  
  /** @type {Number} */
  previousPage: 0,
  
  /** @type {import('./models/Profile.js').Profile|null} */
  profile: null,
  
  /** @type {String|null} */
  query: null
})
