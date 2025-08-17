import React from 'react'
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'

const STU_DATA = [
  {
    id: 1,
    name: 'Heisenberg',
  },
  {
    id: 2,
    name: 'Pinkman',
  },
  {
    id: 3,
    name: 'Soul',
  },
  {
    id: 4,
    name: 'Gus',
  },
]
export default function Student(props) {
  // 可以使用useParams()获取参数
  const { id } = useParams()

  const location = useLocation() //获取当前地址信息
  console.log(`output->location`, location)

  /* 如果路径匹配返回一个对象，不匹配返回null */
  const match = useMatch('/about') //检查当前url是否匹配某个路由

  /* useNavigate获取一个用于跳转页面的函数 */
  const nav = useNavigate()

  const stu = STU_DATA.find((e) => e.id === id * 1)
  // const stu = STU_DATA.find((e) => e.id === +props.match.params.id)

  const clickHandler = () => {
    nav('/about') //采用push跳转
    nav('/about', { replace: true }) //采用replace跳转
  }

  return (
    <>
      <div>学生组件</div>
      <button onClick={clickHandler}>点击跳转</button>
      <div>{stu ? `${stu.id} --- ${stu.name}` : '未匹配数据'}</div>
    </>
  )
}
