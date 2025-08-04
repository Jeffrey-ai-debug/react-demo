import React from 'react'
/* 
  类组件必须继承自React.Component
    相较于函数式组件，类组件的编写要麻烦一些，
      但是他们功能是一样的
*/
class App extends React.Component {
  // 类组件中，必须添加一个render()方法，且方法的返回值必须是jsx
  render() {
    return <div>Hello React!</div>
  }
}

// 导出App
export default App
