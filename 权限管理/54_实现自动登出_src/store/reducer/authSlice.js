import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: () => {
    const token = localStorage.getItem('token')
    if (!token) {
      return {
        isLogged: false,
        token: null,
        user: null,
        expirationTime: 0,//登出状态失效时间
      }
    }
    return {
      isLogged: true,
      token,
      user: JSON.parse(localStorage.getItem('user')),
      expirationTime: localStorage.getItem('expirationTime')
    }
  },
  reducers: {
    login(state, action) {
      state.isLogged = true
      state.token = action.payload.token
      state.user = action.payload.user
      // 获取当前时间
      const currentTime = Date.now()
      // 设置登录有效时间
      const timeOut = 1000 * 60 * 60 * 24 * 7//一周
      state.expirationTime = currentTime + timeOut//设置失效时间
      // 将数据同时存储到本地
      localStorage.setItem('token', state.token)
      localStorage.setItem('user', JSON.stringify(state.user))
      localStorage.setItem('expirationTime', JSON.stringify(state.expirationTime + ''))
    },
    logout(state, action) {
      state.isLogged = false
      state.token = null
      state.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice
