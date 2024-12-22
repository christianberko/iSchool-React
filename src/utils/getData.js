//this method is to go get out json data and return it!

const proxyServer = 'https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/';
//const proxyServer = 'http://solace.ist.rit.edu/~dsbics/proxy/http://ist.rit.edu/api';

//arg endpoint is the endpoiint of the Api we want to hit
//ex: /about or /people
async function getData(endpoint){
    const result = await fetch(`${proxyServer}${endpoint}`);
    return await result.json();


}

export default getData