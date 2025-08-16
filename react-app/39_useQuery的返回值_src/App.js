import React from 'react'
import { useGetStudentsQuery } from './store/studentApi'
import StudentList from './components/StudentList/StudentList'

let num = 0

export default function App() {
  const result = useGetStudentsQuery(num) //调用Api中的钩子查询数据

  /* 
    currentData: undefined,//当前参数的最新数据
    data: undefined,//最新的数据
    isError: false,//布尔值，是否有错误
    error: Error(),//对象，有错时才存在
    isFetching: true,//布尔值，数据是否在加载
    isLoading: true,//布尔值，表示数据是否是第一次加载
    isSuccess: false,//布尔值，请求是否成功
    isUninitialized: false,//请求是否还没有开始发送
    refetch: () => refetchOrErrorIfUnmounted(promiseRef),//返回一个函数，用来重新加载数据
    status: "pending",//字符串，请求的状态
  */
  console.log(result.data, result.currentData)

  // 调用Api查询数据
  const { data: stus, isSuccess, isLoading, refetch } = result
  return (
    <div>
      <button onClick={refetch}>刷新</button>
      <button onClick={() => num++}>改变num</button>
      {isLoading && <p>请求中。。。</p>}
      {isSuccess && <StudentList stus={stus} />}
    </div>
  )
}
