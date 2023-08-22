import './App.css'
import { Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div>HOME</div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
