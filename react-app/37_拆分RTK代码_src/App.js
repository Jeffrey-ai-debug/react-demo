import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAge, setName } from './store/stuSlice'
import { setName as setGangsterName, setAddress } from './store/personSlice'

export default function App() {
  // useSelector()用来加载state中的数据
  const student = useSelector((state) => state.student)

  // 引入gangster的state
  const person = useSelector((state) => state.person)

  // 通过useDispatch来获取派发器对象
  const dispatch = useDispatch()

  // 获取action的构建器

  const setNameHandler = () => {
    dispatch(setName('Heisenberg'))
  }

  const setAgeHandler = () => {
    dispatch(setAge(28))
  }

  const setAddressHandler = () => {
    dispatch(setAddress('台湾省台北市'))
  }
  const setGangsterNameHandler = () => {
    dispatch(setGangsterName('赵山鸡'))
  }
  return (
    <div>
      <p>
        {student.name}--
        {student.age}--
        {student.gender}--
        {student.address}
      </p>
      <button onClick={setNameHandler}>修改name</button>
      <button onClick={setAgeHandler}>修改age</button>

      <hr />

      <p>
        {person.name}--
        {person.address}
      </p>
      <button onClick={setGangsterNameHandler}>修改name</button>
      <button onClick={setAddressHandler}>修改address</button>
    </div>
  )
}
