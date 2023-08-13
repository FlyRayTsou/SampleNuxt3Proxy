<script setup>
const directData = ref([])
const nuxtProxyData1 = ref([])
const nuxtProxyData2 = ref([])
const nuxtProxyData3 = ref([])
const apiProxyData1 = ref([])
const apiProxyData2 = ref([])

async function fetchData() {
    // fetch data from broswer
    const directResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    directData.value = await directResponse.json();
    
    // fetch data via nuxt proxy setting (/proxy/test-path-one)
    const NuxtProxyResponse1 = await fetch('/proxy/test-path-one');
    nuxtProxyData1.value = await NuxtProxyResponse1.json();

    // fetch data via nuxt proxy setting (/proxy/*)
    // Not able to fetch two layer like /proxy/test/anything
    const NuxtProxyResponse2 = await fetch('/proxy/test');
    nuxtProxyData2.value = await NuxtProxyResponse2.json();

    // fetch data via nuxt proxy setting (/proxyAny/**)
    const NuxtProxyResponse3 = await fetch('/proxyAny/test/anything');
    nuxtProxyData3.value = await NuxtProxyResponse3.json();

    const apiProxyResponse1 = await fetch('/api/proxy1');
    apiProxyData1.value = await apiProxyResponse1.json();

    const apiProxyResponse2 = await fetch('/api/proxy2');
    apiProxyData2.value = await apiProxyResponse2.json();
}
</script>

<template>
    <div>
        <button v-on:click="fetchData()">Click me</button>
        <h1>Access https://jsonplaceholder.typicode.com/todos</h1>
        <div>{{ directData[0] }}</div>
        <h1>Access /proxy/test-path-one</h1>
        <div>{{ nuxtProxyData1[0] }}</div>
        <h1>Access /proxy/any</h1>
        <div>{{ nuxtProxyData2[0] }}</div>
        <h1>Access /proxyAny/**</h1>
        <div>{{ nuxtProxyData3[0] }}</div>
        <h1>Access /api/proxy1</h1>
        <div>{{ apiProxyData1[0] }}</div>
        <h1>Access /api/proxy2</h1>
        <div>{{ apiProxyData2[0] }}</div>
    </div>
</template>