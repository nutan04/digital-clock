import { useState } from 'react';
import './App.css';

function App() {
  
  const [time, setTime] = useState(new Date());
  let d=new Date()
 
  const interval = setInterval(() => {
    setTime(new Date());
  }, 1000);
  
  return (
   <>
   <div style={{border:"2px solid",textAlign:"center"}}>
   <h1>Digital Clock</h1>
   <h4>Today's Date: {time.getDay()}/{time.getMonth()+1}/{time.getFullYear()}</h4>
   <h4>The current time is: {time.toLocaleTimeString()}</h4>
   </div>
   </>
  );
}

export default App;
