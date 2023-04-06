const axios = require('axios')

const options = {
    method: 'GET',
    url: 'https://pinksale-trending.s3.amazonaws.com/trending.json',
    headers: {
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'en,id-ID;q=0.9,id;q=0.8,en-US;q=0.7',
    'Cache-Control': 'max-age=0',
    Connection: 'keep-alive',
    'If-Modified-Since': 'Wed, 28 Dec 2022 13:52:12 GMT',
    'If-None-Match': '"02a7a08b021ac38b25af131193d45280"',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Content-Encoding': 'gzip'
    }
};

const data = await axios.request(options);
const f = data.data.data;
const z = [];

for(let i =0; i< f.length;i++) {
    z.push({
        address : f[i].address,
        symbol : f[i].token
    })
}
fs.writeFile('./trending.json', JSON.stringify(z), function(){

    totalPinksalePool = []
})