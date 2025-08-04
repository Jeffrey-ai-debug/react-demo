// import Logs from './components/Logs/Logs'

const App = () => {
  const clickHandler = (event) => {
    alert('我是App中的回调函数')

    event.preventDefault();//取消事件的默认行为
    event.stopPropagation();//取消事件冒泡
    /* 
      在React中，无法通过return false取消默认行为
      return false;

      事件对象
        -React事件中同样会传递事件对象，可以在响应函数中定义参数来接收事件对象
        -React中的事件对象同样不是原生的事件对象，是经过包装的事件对象
        -由于对象进行包装，所以使用过程中我们无需考虑兼容性问题
    */
    return false
  }

  return (
    <div  onClick={()=>{alert('V我50')}}
     style={{ width: 200, height: 200, margin: '100px auto', background: '#bfa' }}>
      {/* 在React中时间需要通过元素属性来设置，
            和原生js不同，在React中事件的属性需要使用驼峰命名法：
              onclick -> onClick
              onchange -> onChange
            属性值不能直接执行代码，而是需要一个回调函数：
              onClick="alert(123)"
              onClick={()=>{alert(123)}}
      */}
      <button
        onClick={() => {
          alert('我这边有很厉害的纲丝特')
        }}
      >
        我是陈冠希
      </button>
      <button onClick={clickHandler}>我在LA</button>
      <br />
      <a href="https://www.baidu.com" onClick={clickHandler}>
        超链接
      </a>
    </div>
  )
}

/* 
  原生事件
  <button onclick="alert(123)">点我一下</button>

  <button id="btn">点我一下</button>
  document.getElementById('btn).onclick = fucntion(){}
  document.addEventListener('click',function(){},false)
*/

// 导出App
export default App
