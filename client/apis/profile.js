import request from 'superagent'

const rootUrl = '/api/v1'

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

// POST /api/v1/profiles/add

export function postProfile(profileData) {
  return request
    .post(rootUrl + '/profiles/add/')
    .send(profileData)
    .then((res) => {
      return res.body
    })
}

export function removeProfile(id, token) {
  return request
    .del(`${rootUrl}/profiles/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .catch((e) => console.log(e))
}
