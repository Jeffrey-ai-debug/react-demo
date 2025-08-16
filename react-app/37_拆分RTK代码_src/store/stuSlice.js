// 从index拆分stuSlice
import { createSlice } from '@reduxjs/toolkit'

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

export const { setAge, setName } = stuSlice.actions
export const { reducer: stuReducer } = stuSlice
