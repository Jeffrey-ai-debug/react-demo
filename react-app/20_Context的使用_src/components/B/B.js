import React, { useContext } from 'react'
import testContext from '../../store/testContext'
/* 
  使用context方式二：
    1.导入Context
    2.是用钩子函数useContext()获取context，
      它会将Context中的数据获取并作为返回值返回

  只能在函数式组件中使用
*/
export default function B() {
  // 使用钩子函数获取Context
  const ctx = useContext(testContext)
  return (
    <div>
      {ctx.name} - {ctx.age}
    </div>
  )
}
