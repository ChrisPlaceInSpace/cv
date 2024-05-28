import { useState } from 'react'
import './App.css'
import RandomButton from './Components/RandomButton'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      
      <h1>Welcome to Chris's page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>        
      </div>     
      <RandomButton/>
    </>
  )
}

export default App
