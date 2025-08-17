import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'

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
    name: 'Hank',
  },
]
export default function Student(props) {
  // console.log(`路由传输的id：`, props.match.params)
  // console.log(`路由传输的state：`, props.location.state)

  /* 
    除了可以通过props获取三个对象外，也可以通过钩子函数来获取
  */
 const match = useRouteMatch()
 const location = useRouteMatch()
 const history = useRouteMatch()
 const params = useParams()

  const stu = STU_DATA.find((e) => e.id === +params.id)
  // const stu = STU_DATA.find((e) => e.id === +props.match.params.id)
  return (
    <>
      <div>学生组件</div>
      <div>{stu ? `${stu.id} --- ${stu.name}` : '未匹配数据'}</div>
    </>
  )
}
