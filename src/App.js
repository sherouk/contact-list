import "./styles.css"

const App = () => {
  const message = 'This is my first variable rendered in JSX!'
  const handleClick = () => {
    alert('You clicked the message')
  }

  return (
    <div>
      <h1>Hello, React World!</h1>
      <h2 onClick={handleClick}>{message}</h2>
    </div>
  )
}

export default App
