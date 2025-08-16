import React from 'react'
import { useGetStudentsQuery } from './store/studentApi'
import StudentList from './components/StudentList/StudentList'

export default function App() {
  const result = useGetStudentsQuery(null, {
    // useQuery可以接收一个对象作为第二个参数，通过该对象可以对请求进行配置
    selectFromResult: (result) => {
      if (result.data) {
        result.data = result.data.filter((e) => e.age < 36) //过滤age
      }
      return result
    }, //用来指定useQuery返回的结果
    pollingInterval: 0, //设置轮询的间隔，单位毫秒，默认0 不轮询
    skip: false, //是否跳过当前请求，默认false
    refetchOnMountOrArgChange: false, //设置是否每次都重新加载数据 false正常使用缓存 数字，数据缓存时间（秒）
    refetchOnFocus: false, //是否在重新获取焦点时重载数据
    reftchOnReconnect: false, //是否在重新连接后加载数据
  }) //调用Api中的钩子查询数据

  /* 
    useQuery的返回值：

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
  console.log(result)

  // 调用Api查询数据
  const { data: stus, isSuccess, isLoading, refetch } = result
  return (
    <div>
      <button onClick={refetch}>刷新</button>
      {isLoading && <p>请求中。。。</p>}
      {isSuccess && <StudentList stus={stus} />}
    </div>
  )
}
