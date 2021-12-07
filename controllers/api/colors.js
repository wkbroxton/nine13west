const fetch = require('node-fetch');

const SEARCH_URL ='http://colormind.io/api/';

module.exports = {
    searchColors
};

async function searchColors(req, res) {
    await fetch(`${SEARCH_URL}`)
    .then(res => {
        if(res.ok) return res,json()
        throw new Error('No Can Do')
    })
    then(data => {
        res.json(data)
    })
}