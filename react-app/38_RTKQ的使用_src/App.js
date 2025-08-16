import React from 'react'
import { useGetStudentsQuery } from './store/studentApi'

export default function App() {
  // 调用Api查询数据
  const { data, isSuccess, isLoading } = useGetStudentsQuery() //调用Api中的钩子查询数据
  return (
    <div>
      {isLoading && <p>请求中。。。</p>}
      {isSuccess &&
        data.data.map((e) => (
          <p key={e.id}>
            {e.name}---
            {e.age}---
            {e.gender}---
            {e.address}---
          </p>
        ))}
    </div>
  )
}
