export function isAuth() {
   const jwt = localStorage.getItem('jwt')
   if(jwt) return JSON.parse(jwt)
   return false
}

//判断用户是否登录