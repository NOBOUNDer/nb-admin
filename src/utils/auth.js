export function getToken () {
  return localStorage.getItem('token')
}

export function setToken (token) {
  return localStorage.setItem('token', token)
}

export function isLogined () {
  return !!localStorage.getItem('token');
}
