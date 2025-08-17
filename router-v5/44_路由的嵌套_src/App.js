import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
} from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Student from './components/Student'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <h1>App组件</h1>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/about">
        <About />
        <Route path="/about/hello">
          <Hello />
        </Route>
      </Route>
    </div>
  )
}

export default App
