import React, { useCallback, useContext, useState } from 'react'
import './Student.module.css'
import StuContext from '../../store/StuContext'
import StudentForm from '../StudentForm/StudentForm'

export default function Student({
  stu: { name, gender, age, address, documentId },
}) {
  // { stu: { name, gender, age, address } } = props //解构赋值

  const ctx = useContext(StuContext)

  const [loading, setLoading] = useState(false)

  const [err, setError] = useState('')

  const [isEdit, setIsEdit] = useState(false)

  const delStu = useCallback(async (id) => {
    try {
      setLoading(true)
      setError('')
      const res = await fetch(`http://localhost:1337/api/students/${id}`, {
        method: 'delete',
      })
      if (!res.ok) {
        throw new Error('删除失败！')
      }
      ctx.fetchData()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  })

  const deleteHandler = (id) => {
    delStu(id)
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
