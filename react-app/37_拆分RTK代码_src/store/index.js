// 使用RTK来构建store
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { stuReducer } from './stuSlice'
import { personReducer } from './personSlice'

/* // createSlice 创建reducer的切片
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

export const { setAge, setName } = stuSlice.actions */

/* const personSlice = createSlice({
  name: 'gangster',
  initialState: {
    name: '陈浩南',
    address: '香港铜锣湾'
  },
  reducer: {
    setName(state, action){
      state.name = action.payload
    },
    setAddress(state, action){
      state.address = action.payload
    },
  }
}) */

// 导出action的创建器

const store = configureStore({
  reducer: {
    student: stuReducer,
    person: personReducer,
  },
})

export default store
