import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

// 创建Api对象
// createApi()用来创建RTKQ中的API对象
// RTKQ的所有功能都需要该对象来进行
// createApi()需要一个对象作为参数
const studentApi = createApi({
  reducerPath: 'studentApi', //Api的标识，不能和其他Api或reducer重复
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/',
  }), //指定查询的基础信息，发送请求使用的工具
  endpoints(build) {
    //build是请求的构建起，通过build来设置请求的相关信息
    return {
      getStudents: build.query({
        query() {
          // 用来指定子路径
          return 'students'
        },
        // transformResponse用来转换响应数据的格式
        transformResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data
        },
      }),
      getStudentById: build.query({
        query(id) {
          // 用来指定子路径
          return `students/${id}`
        },
        // transformResponse用来转换响应数据的格式
        transformResponse(baseQueryReturnValue) {
          console.log(`output->baseQueryReturnValue`, baseQueryReturnValue)
          return baseQueryReturnValue.data
        },
        keepUnusedDataFor: 60, //设置数据缓存的时间，单位秒，默认60秒（从组件生成开始计时，超过60秒会自动发送请求）
      }),
    }
  }, //endpoints 用来指定Api中的各种功能，是一个方法，需要一个对象作为返回值
})

// Api对象创建后，对象中会根据各种方法自动生成对应的钩子函数
// 通过这些钩子函数，可以来向服务器发送请求
// 钩子函数的命名规则：getStudents ---> useGetStudentsQuery
export const { useGetStudentsQuery, useGetStudentByIdQuery } = studentApi

export default studentApi
