import React, { useCallback, useContext, useEffect, useState } from 'react'
import './StudentForm.css'
import StuContext from '../../store/StuContext'
import useFetch from '../../hooks/useFetch'

export default function StudentForm(props) {
  const ctx = useContext(StuContext)

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

  // const [loading, setLoading] = useState(false)

  // const [err, setError] = useState('')

  const { loading, err, fetchData: updateStudent } = useFetch({
    url: props.stu ? `students/${props.stu.documentId}` : 'students',
    method: props.stu ? 'put' : 'post',
    headers: {
      'Content-type': 'application/json',
    },
  }, ctx.fetchData)
  /* // 创建添加学生的方法
  const addStudent = useCallback(async (newStu) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('http://localhost:1337/api/students', {
        method: 'post',
        body: JSON.stringify({ data: newStu }),
        headers: {
          'Content-type': 'application/json',
        },
      })
      if (res.ok) {
        console.log(`添加成功`)
      } else {
        throw new Error('添加失败')
      }
      ctx.fetchData()
    } catch (e) {
      console.log(e.message)
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, []) */

  /* const updateStudent = useCallback(async (newStu) => {
    const id = newStu.documentId
    delete newStu.documentId
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`http://localhost:1337/api/students/${id}`, {
        method: 'put',
        body: JSON.stringify({ data: newStu }),
        headers: {
          'Content-type': 'application/json',
        },
      })
      if (res.ok) {
        console.log(`修改成功`)
      } else {
        throw new Error('修改失败')
      }
      ctx.fetchData()
    } catch (e) {
      console.log(e.message)
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, []) */

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
    updateStudent(inputData)
  }
  const editHandler = () => {
    delete inputData.documentId
    updateStudent(inputData)
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
          {props.stu ? (
            <>
              <button onClick={editHandler}>提交</button>{' '}
              &nbsp;|&nbsp;
              <button onClick={props.onCancel}>取消</button>
            </>
          ) : (
            <button onClick={submitHandler}>添加</button>
          )}
        </td>
      </tr>
      {loading && (
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
      )}
    </>
  )
}
