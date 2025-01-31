import { useState } from "react";

function App(){
  const [count, setcount] = useState(0);

  const IncrementCounter = () => {
    setcount((prevCount) => prevCount + 1); 
  }
  return(
    <div>
      <button onClick={IncrementCounter}>Counter</button>
      <span>{count}</span>
    </div>  
  )
}
export default App