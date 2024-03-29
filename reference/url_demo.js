const url = require('url');

const myUrl = url.parse('http://mywebsite.com:8000/html?id=100&status=200');

// Serialized URL
console.log(myUrl.href);
//console.log(myUrl.toString());
// Host (root domain)
console.log(myUrl.host);
// Hostname
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serialized query
console.log(myUrl.search);
// Params object 
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);
// Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));