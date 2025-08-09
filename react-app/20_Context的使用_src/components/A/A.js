import React from 'react'
import TestContext from '../../store/testContext'

/* 
  使用方式一：
    1.引入context
    2.使用Xxx.Consumer组件来创建元素
      Consumer的标签需要一个回调函数
      它会将context设置为回调函数的参数，通过参数就可以访问到context中存储的数据
*/

export default function A() {
  return (
    <TestContext.Consumer>
      {(ctx) => {
        return (
          <div>
            {ctx.name} - {ctx.age}
          </div>
        )
      }}
    </TestContext.Consumer>
  )
}
