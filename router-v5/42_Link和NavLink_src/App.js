import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  )
}

export default App
