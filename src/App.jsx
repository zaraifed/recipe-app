import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Recipe from './components/Recipe'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  )
}

export default App

// client side routing
// each route maps a URL path to a react component
// e.g. /recipe url is mapped to Recipe component