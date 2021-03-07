import URL from "./URL";

export default class URLBuilder
{
  url : URL

  setURL(url : URL) : URLBuilder
  {
    this.url = url
    return this
  }

  setSearchParams(
    key : string,
    value : string
  ) : URLBuilder
  {
    this.url.searchParams[key] = value
    return this
  }

  setHash(hash : string) : URLBuilder
  {
    this.url.hash = hash
    return this
  }

  getResult() : URL
  {
    return this.url
  }
}