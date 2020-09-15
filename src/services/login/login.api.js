import instance from '../root.api'

export const loginRequest = ({ identifier, password }) =>
  instance
    .post('/auth/local', { identifier, password })
    .then(response => ({ response }))
    .catch(response => ({ ...response }))
