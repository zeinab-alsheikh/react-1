import { useState } from "react";

function App(){


  let [count,setCount] = useState(0);
  let changeCounter = ()=>{
   setCount(count+1);
   setCount(count+1);
   console.log(count);
  }
  return (
    <>
    <button onClick={changeCounter}>Zainab Aklsheikh {count}</button>
    </>
  );
}

export default App;