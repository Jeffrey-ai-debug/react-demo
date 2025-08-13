import React, { useEffect, useState } from 'react'
import StudentList from './components/StudentList/StudentList'
import './App.css'

export default function App() {
  const [stuData, setStuData] = useState([])

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
        setStuData(data.data)
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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError('')

      try {
        const res = await fetch('http://localhost:1337/api/students')
        if (res.ok) {
          const data = await res.json()
          setStuData(data.data)
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
    }

    fetchData()
  }, [])

  return (
    <div className="app">
      <button>加载数据</button>
      {!loading && !err ? (
        <StudentList stus={stuData} />
      ) : loading && !err ? (
        <p>数据正在加载中。。。</p>
      ) : (
        '数据加载失败。。。' && err
      )}
    </div>
  )
}
