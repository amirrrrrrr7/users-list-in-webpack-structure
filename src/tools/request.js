function request (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = function () {
      resolve(JSON.parse(xhr.response))
    }
    xhr.onerror = function () {
      reject(
        new Error({
          status: xhr.status,
          statusText: xhr.statusText
        })
      )
    }
    xhr.send()
  })
}

export default request
