import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [name, setName] = useState('vikas');

  // Variation 1 – Runs on every render (no dependency array)
  // useEffect(() => {
  //   console.log("UI Render Type 1");
  // });

  // Variation 2 – Runs only once on initial mount (empty dependency array)
  // useEffect(() => {
  //   console.log("UI Render Type 2");
  // }, []);

  // Variation 3 – Runs on initial mount + whenever 'text' changes
  // useEffect(() => {
  //   console.log("Change observed");
  // }, [name]);

  //Variation 4 - To handle unmounting of a component
  useEffect(() => {
    console.log("Listener Added");

    return () => {
      console.log("Listener Removed");
    }
  }, [text]);



  function changeHandler(event) {
    console.log(event.target.value)
    setText(event.target.value);
  }

  return (
    <div>
      <input type='text' onChange={changeHandler}></input>
    </div>
  )
}

export default App
