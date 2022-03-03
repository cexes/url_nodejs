const url = require('url')
const address = 'https://www.blogdadeh.com.br/catalogo?produtos-livro'
const parsedURrl = new url.URL(address)

console.log(parsedURrl.host)
console.log(parsedURrl.pathname)
console.log(parsedURrl.search)
console.log(parsedURrl.searchParams)
console.log(parsedURrl.searchParams.get('produtos'))
