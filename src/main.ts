import '@/assets/style.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'https://api.github.com/graphql',
//   headers: {
//     Token: import.meta.env.GITHUB_TOKEN,
//   }
// })

// Cache implementation
// const cache = new InMemoryCache()

// Create the apollo client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// })


// const apolloProvider = createApolloProvider({
//   defaultClient: apolloClient,
// })

const app = createApp(App)

app.use(router)

// app.use(apolloProvider)

app.mount('#app')

