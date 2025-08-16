/* 
  React中的钩子函数只能在函数组件或自定义钩子中调用
    当我们需要将React中钩子函数提取到一个公共区域时，就可以使用自定义钩子

  自定义钩子其实就是一个普通函数，只是它的名字需要使用use开头
*/
import React, { useCallback, useEffect, useState } from 'react'

/* 
  reqObj：
  {
    url: 请求地址
    method: 请求方式
    body: 请求体
  }

  cd 回调函数，请求成功后执行
*/
export default function useFetch(reqObj, cd) {
  const [data, setData] = useState([])

  // 添加一个state来记录数据是否正在加载
  const [loading, setLoading] = useState(false)

  const [err, setError] = useState('')
  /* 
    加载数据
      组件初始化时需要向服务器发送请求来加载数据
  */

  // 用useCallback防止每次渲染组件，函数都重新创建
  const fetchData = useCallback(async (body) => {
    setLoading(true)
    setError('')

    try {
      const res = await fetch('http://localhost:1337/api/' + reqObj.url, {
        method: reqObj.method || 'get',
        headers: { 'Content-type': reqObj.type || 'application/json' },
        body: body ? JSON.stringify({ data: body }) : undefined,
      })
      if (res.ok) {
        if (res.statusText === 'OK') {
          const data = await res.json()
          setData(data.data)
        }
        cd && cd()
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
