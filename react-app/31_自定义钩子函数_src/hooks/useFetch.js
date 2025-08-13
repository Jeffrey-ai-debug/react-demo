/* 
  React中的钩子函数只能在函数组件或自定义钩子中调用
    当我们需要将React中钩子函数提取到一个公共区域时，就可以使用自定义钩子

  自定义钩子其实就是一个普通函数，只是它的名字需要使用use开头
*/
import React, { useCallback, useEffect, useState } from 'react'

export default function useFetch() {
  const [data, setData] = useState([])

  // 添加一个state来记录数据是否正在加载
  const [loading, setLoading] = useState(false)

  const [err, setError] = useState('')
  /* 
    加载数据
      组件初始化时需要向服务器发送请求来加载数据
  */

  /* useEffect(() => {
    // 在effect中加载数据
    // fetch() 用来向服务器发送请求加载数据，时Ajax的升级版
    // 它需要两个参数：1.请求地址 2.请求信息

    setLoading(true)
    setError('')
    fetch('http://localhost:1337/api/students')
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        setLoading(false)
        // 抛出错误
        throw new Error('数据加载失败！')
      })
      .then((data) => {
        console.log(`output->data`, data.data)
        setData(data.data)
        setLoading(false)
      })
      .catch((e) => {
        // catch中的回调函数，用来统一处理错误
        // catch一执行，说明上述代码出错了
        // 代码运行到这，说明没有成功加载到数据
        setLoading(false)
        setError(e)
        console.log(`output->err`,err)
      })
  }, []) */

  // 用useCallback防止每次渲染组件，函数都重新创建
  const fetchData = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const res = await fetch('http://localhost:1337/api/students')
      if (res.ok) {
        const data = await res.json()
        setData(data.data)
        setLoading(false)
      } else {
        throw new Error('数据加载失败！')
      }
    } catch (e) {
      console.log(`output->e`, e.message)
      setError(<p>{e.message}</p>)
      console.log(`output->err`, err)
    } finally {
      setLoading(false)
    }
  }, [])

  // 设置返回值
  return {
    data,
    loading,
    err,
    fetchData,
  }
}
