import React, { useCallback, useContext, useEffect, useState } from 'react'
import './StudentForm.css'
// import StuContext from '../../store/StuContext'
// import useFetch from '../../hooks/useFetch'
import { useGetStudentByIdQuery } from '../../store/studentApi'

export default function StudentForm(props) {
  // const ctx = useContext(StuContext)
  const [inputData, setInputData] = useState(
    props.stu
      ? { ...props.stu }
      : {
          name: '',
          age: '',
          address: '',
          gender: '男',
        }
  )

  const { data: stuData, isSuccess } = useGetStudentByIdQuery(props.stuId)

  useEffect(() => {
    if(isSuccess){
      setInputData(stuData)
    }else{

    }
  }, [isSuccess])

  const nameChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, name: e.target.value }))
  }
  const genderChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, gender: e.target.value }))
  }
  const ageChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, age: e.target.value * 1 }))
  }
  const addressChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, address: e.target.value }))
  }
  const submitHandler = () => {
    console.log(`output->inputData`, inputData)
    // updateStudent(inputData)
  }
  const editHandler = () => {
    delete inputData.documentId
    // updateStudent(inputData)
  }

  return (
    <>
      <tr className="student-form">
        <td>
          <input
            type="text"
            value={inputData.name}
            onChange={nameChangeHandler}
          />
        </td>
        <td>
          <select value={inputData.gender} onChange={genderChangeHandler}>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            value={inputData.age}
            onChange={ageChangeHandler}
          />
        </td>
        <td>
          <input
            type="text"
            value={inputData.address}
            onChange={addressChangeHandler}
          />
        </td>
        <td>
          {props.stuId ? (
            <>
              <button onClick={editHandler}>提交</button> &nbsp;|&nbsp;
              <button onClick={props.onCancel}>取消</button>
            </>
          ) : (
            <button onClick={submitHandler}>添加</button>
          )}
        </td>
      </tr>

      {/* {loading && (
        <tr>
          <td colSpan={5}>{!props.stu ? '添加中。。。' : '修改中。。。'}</td>
        </tr>
      )}
      {err && (
        <tr>
          <td colSpan={5}>
            {!props.stu ? '添加失败。。。' : '修改失败。。。'}
          </td>
        </tr>
      )} */}
    </>
  )
}
