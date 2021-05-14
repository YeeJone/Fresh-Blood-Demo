
const lite = require('caniuse-lite')

// console.log(lite.agents)

console.log(lite.feature({ title: 'intersectionObserver', status: 'ls'}))