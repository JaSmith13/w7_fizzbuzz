import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [number, setNumber] = useState(1)
  const [answer, setAnswer] = useState('')

  const handleInc = () => {
    setNumber(number + 1)
  }

  useEffect(() => {
    console.log('useEffect triggered')
    if (number % 3 === 0 && number % 5 === 0) {
      setAnswer ("fizzbuzz")
    } else if (number % 3 === 0) {
      setAnswer ("fizz")
    } else if (number % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(number);
    }
  }, [number])

  return (
    <>
      <h1>FizzBuzz</h1>
      <button value={number} onClick={handleInc}>+</button>
      <p>Number is {answer}</p>
    </>
  );
}

export default App;
