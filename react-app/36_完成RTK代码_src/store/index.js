// 使用RTK来构建store
import { configureStore, createSlice } from '@reduxjs/toolkit'

// createSlice 创建reducer的切片
const stuSlice = createSlice({
  name: 'stu', //用来自动生成action中的type
  initialState: {
    name: 'Walter White',
    age: 18,
    gender: '男',
    address: '新墨西哥',
  }, //state的初始值
  reducers: {
    //指定state的各种操作，直接在对象中添加方法
    setName(state, action) {
      // 可以通过不同的方法来指定对state的不同操作
      // 两个参数：state 这个state是一个代理对象，可以直接修改
      state.name = action.payload
    },
    setAge(state, action) {
      // 可以通过不同的方法来指定对state的不同操作
      // 两个参数：state 这个state是一个代理对象，可以直接修改
      state.age = action.payload
    },
  },
})

// 切片对象会自动帮我们生成action(派发器)
// actions中存储的就是slice自动生成的action创建器（函数），调用函数后会自动创建action对象
// action对象的结构{type:name/函数名, payload:函数的参数}
export const { setAge, setName } = stuSlice.actions

const store = configureStore({
  reducer: {
    student: stuSlice.reducer
  }
})

export default store