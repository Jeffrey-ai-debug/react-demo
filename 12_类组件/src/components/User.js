import React, { Component } from 'react'

export default class user extends Component {
  /*  
    类组件的props是存储到类的实例中
      可以直接通过实例对象访问 this.props
    
    类组件中的state统一存储到了实例对象的state属性中
      可以通过 this.state来访问
      通过this.setState()来进行修改
        当我们通过this.setState()修改state时，
          React只会修改设置了的属性

    函数组件中，响应函数直接以函数的形式定义在组件中，
      但在类组件中，响应函数是以类的方法来定义，之前的属性都会保留，
      但是这仅限于直接存储在state中的第一层属性

    获取DOM对象
      1.创建一个属性，用来存储DOM对象
        divRef = React.createRef();
      2.将这个属性设置为指定元素的ref值
  */

  state = {
    count: 0,
    test: 'blue,yello,pink',
    students: {
      name: 'Jesic PinkMan',
      age: 18
    }
  }

  // 为了省事（this指向问题），在类组件中响应函数都应该以箭头函数的形式定义
  /* 
    注： 箭头函数的this永远指向定义时的作用域
         普通函数的this指向调用它的对象
  */
  clickHandler = () => {
    // 如下是同步的调用setState()
    // this.setState({count: this.state.count + 1})

    // 如下是异步的调用setState()
    // this.setState((prevState) => {
    //   return { count: prevState.count + 1 }
    // })

    this.setState({
      students: {...this.state.students, age: 28 }
    })
  }

  // 创建属性存储DOM对象
  divRef = React.createRef();

  render() {
    console.log(`output->this.props`, this.props)
    console.log(`output->this.divRef`,this.divRef)
    return (
      <div ref={this.divRef}>
        <h1>{this.state.count} --- {this.state.test}</h1>
        <h2>{this.state.students.name} --- {this.state.students.age}</h2>
        <button onClick={this.clickHandler}>点击+1</button>
        <ul>
          <li>姓名:{this.props.name}</li>
          <li>年龄:{this.props.age}</li>
          <li>性别:{this.props.gender}</li>
        </ul>
      </div>
    )
  }
}
