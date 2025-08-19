import React, {
  useId,
  // startTransition,
  useState,
  useTransition,
} from 'react'
import StudentList from './components/StudentList'

export default function App() {

  const [ filterWord, setFilterWord ] = useState('')
  const [ filterWord2, setFilterWord2 ] = useState('')

  const [isPending, startTransition] = useTransition()
  console.log(`output->isPending`,isPending)


  const changehandler = (e) => {
    setFilterWord(e.target.value)

    // startTransition的回调函数中设置setState会在其他的setState生效之后才执行
    startTransition(()=>{
      setFilterWord2(e.target.value)
    })
  }

  const id = useId()//自动生成id
  console.log(`output->id`,id)

  return (
    <div>
      <h1>App</h1>
      <hr />
      {/* 
        当我们多个组件使用同一个state时，
          组件可能会相互影响
          一个组件卡顿，会导致所有组件都卡
          此时，就可以使用延迟
      */}
      <input type='text' value={filterWord} onChange={changehandler}/>
      { isPending ? <p>加载中。。。</p> : <StudentList filterWord={filterWord2}/>}
    </div>
  )
}
