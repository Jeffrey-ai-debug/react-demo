import React, { useCallback, useContext, useState } from 'react'
import './Student.module.css'
// import StuContext from '../../store/StuContext'
import StudentForm from '../StudentForm/StudentForm'
import useFetch from '../../hooks/useAutoLogout'
import { useDelStudentMutation } from '../../store/api/studentApi'

export default function Student({
  stu: { name, gender, age, address, documentId },
}) {
  const [isEdit, setIsEdit] = useState(false)

  // 获取删除的钩子,useMutation返回的是一个数组
  // 数组中有两个东西，第一个是操作的触发器，第二个是结果
  const [delStudent, { isSuccess }] = useDelStudentMutation()

  const deleteHandler = (id) => {
    delStudent(documentId)
  }
  const editHandler = () => {
    setIsEdit((prevState) => !prevState)
  }
  const cancelEdit = () => {
    setIsEdit(false)
  }

  return (
    <>
      {!isEdit && !isSuccess && (
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
      )}

      {isSuccess && (
        <tr>
          <td colSpan={5}>删除成功！</td>
        </tr>
      )}

      {isEdit && <StudentForm stuId={documentId} onCancel={cancelEdit} />}
    </>
  )
}
