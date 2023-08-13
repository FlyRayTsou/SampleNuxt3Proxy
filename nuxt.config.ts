// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    routeRules: {
      "/proxy/test-path-one": { proxy: 'https://jsonplaceholder.typicode.com/todos' },
      "/proxy/*": { proxy: 'https://jsonplaceholder.typicode.com/todos' },
      "/proxyAny/**": { proxy: 'https://jsonplaceholder.typicode.com/todos' },
    }
  }
})
