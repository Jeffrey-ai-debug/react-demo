import React, { useCallback, useContext, useState } from 'react'
import './Student.module.css'
import StuContext from '../../store/StuContext'
import StudentForm from '../StudentForm/StudentForm'
import useFetch from '../../hooks/useFetch'

export default function Student({
  stu: { name, gender, age, address, documentId },
}) {
  // { stu: { name, gender, age, address } } = props //解构赋值

  const ctx = useContext(StuContext)

  const [isEdit, setIsEdit] = useState(false)

  const { loading, err, fetchData:delStu } = useFetch({
    url: `students/${documentId}`,
    method: 'delete'
  },ctx.fetchData)

  const deleteHandler = (id) => {
    delStu()
  }
  const editHandler = () => {
    setIsEdit((prevState) => !prevState)
  }
  const cancelEdit = () => {
    setIsEdit(false)
  } 

  return (
    <>
      {!isEdit ? (
        <tr>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td>
            <button onClick={editHandler}>修改</button>
            &nbsp;|&nbsp;
            <button onClick={() => deleteHandler(documentId)}>删除</button>
          </td>
        </tr>
      ) : (
        <StudentForm stu={{name, gender, age, address, documentId}} onCancel={cancelEdit}/>
      )}
      {loading && (
        <tr>
          <td colSpan={5}>正在删除数据。。。</td>
        </tr>
      )}
      {err && (
        <tr>
          <td colSpan={5}>删除失败！</td>
        </tr>
      )}
    </>
  )
}
