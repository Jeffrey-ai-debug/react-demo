import React from 'react'
/* 
  Context相当一个公共的存储空间，
    我们可以将多个组件中都需要访问的数据统一存储到一个Context中，
    这样无需通过props逐层传递，即可使组件访问到这些数据

  Xxx.Provider
    -表示数据的生产者，可以使用它来指定Context中的数据
    -通过value来指定Context中存储的数据，
      这样一来，在该组件的所有子组件都可以通过Context来访问它所指定的数据

  当我们通过Context访问数据时，他会读取离他最近的Provider中的数据
    如果没有Provider，则读取Context中默认的数据
*/

const testContext = React.createContext({
  // 初始化默认数据
  name: '',
  age: 18,
})

export default testContext