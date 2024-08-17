import './App.css'
import useXMODEM from './useXMODEM'

function App() {
  const { handleConnect } = useXMODEM();

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handleConnect}>
        Connect
      </button>
    </>
  )
}

export default App
