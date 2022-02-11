function parseUrl (string) {
  const url = document.createElement('a')
  url.href = string
  return {
    hash: url.hash,
    hostname: url.hostname,
    pathname: url.pathname
  }
}

const obj = parseUrl('https://ffwagency.com/do/any.php?/a=1#foo')

console.log(obj.hash)
console.log(obj.hostname)
console.log(obj.pathname)
