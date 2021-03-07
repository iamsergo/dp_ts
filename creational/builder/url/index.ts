import URL from "./URL";
import URLBuilder from "./UrlBuilder";

const ub = new URLBuilder()

const u0 = new URL('https://url0.com')
const u1 = new URL('http://url1.ru')

const url =
  ub
    .setURL(u0)
    .setSearchParams('id','0')
    
    .setURL(u1)
    .setSearchParams('pass','1234')
    .setHash('article')
    .getResult()

console.log(url.toString())