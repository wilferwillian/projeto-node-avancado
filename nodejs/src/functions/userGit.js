const fetch = require('node-fetch')
module.exports = async function userGit(github){
const response = await fetch(`https://api.github.com/users/${github}`)
const json = await response.json()
return json
}
