import React from 'react'
import Student from '../Student/Student'
import './StudentList.module.css'
import StudentForm from '../StudentForm/StudentForm'

export default function StudentList(props) {
  return (
    <table>
      <caption>学生列表</caption>
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>地址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {
          props.stus.map(e => <Student key={e.id} stu={e} />)
        }
      </tbody>
      <tfoot>
        <StudentForm/>
      </tfoot>
    </table>
  )
}
