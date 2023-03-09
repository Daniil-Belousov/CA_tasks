const mainUrl = 'http://localhost:8080/http://localhost:3000/'

export async function sendData(data) {
  return await fetch(mainUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  })
}