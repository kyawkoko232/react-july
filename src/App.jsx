import { useState } from "react";

function App() {

  let [count, setCount] = useState (0); 
  const handleClick = ()=> {
    setCount(count + 1);
  }

  const resetClick = ()=> {
    setCount(count = 0);
  }

  return <div>
    <button onClick={handleClick}>
      Add Animal
    </button>
    <button onClick={resetClick}>
      Reset Click
    </button>
    <div>Number of Animal: {count} </div>
  </div>
}
export default App;