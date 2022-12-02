import request from 'superagent'

const rootUrl = '/api/v1'

// // GET /api/v1/profiles
// export function getProfiles() {
//   return request.get(rootUrl + '/profiles').then((res) => {
//     return res.body
//   })
// }

// GET /api/v1/profiles/:profileid
export function getProfileById(id) {
  return request.get(rootUrl + '/profiles/' + id).then((res) => {
    return res.body
  })
}

// GET /api/v1/profiles/books/:bookid

export function getProfilesByBookId(id) {
  return request.get(rootUrl + '/profiles/book/' + id).then((res) => {
    return res.body
  })
}
