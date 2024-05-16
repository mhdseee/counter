import { useState } from "react"
const App= ()=>{
  const [number,setNumber]= useState(0)
  function plus(){
    setNumber(number+1)
  }
  function minus(){
    setNumber(number ? number-1 : 0)
  }
  function reset(){
    setNumber(0)
  }
  return(
    <div>
      <p>
        {number}
      </p>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
export default App
