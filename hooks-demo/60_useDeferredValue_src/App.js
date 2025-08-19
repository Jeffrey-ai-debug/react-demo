import React, {
  useDeferredValue,
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import StudentList from './components/StudentList'

export default function App() {
  const [count, setCount] = useState(1)

  // useDeferredValue 需要一个state作为参数，会为该state创建一个延迟值
  // 当设置了延迟值后，每次state修改时都会触发两次重新渲染
  // 这两次执行对于其他部分没有区别，但是延迟值两次执行的值是不同的
  // 第一次执行时 延迟值是state的旧值，第二次执行时，延迟值是state的新值
  const deferredCount = useDeferredValue(count)

  console.log(`output->count,deferredCount`, count, deferredCount)
  const [ filterWord, setFilterWord ] = useState('')

  // 定义延迟值deferredFilterWord
  const deferredFilterWord = useDeferredValue(filterWord)

  const changehandler = (e) => {
    setFilterWord(e.target.value)
  }

  return (
    <div>
      <h1>App</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        点我
      </button>
      <hr />
      {/* 
        当我们多个组件使用同一个state时，
          组件可能会相互影响
          一个组件卡顿，会导致所有组件都卡
          此时，就可以使用延迟
      */}
      <input type='text' value={filterWord} onChange={changehandler}/>
      <StudentList filterWord={deferredFilterWord}/>
    </div>
  )
}
