import React,{ useEffect, useState } from "react";



  function Counter(){
    let x={
      padding:'5px',
      backgroundColor:'red',
      color:'green',
      borderRadius:'100vmax',
      marginLeft:'10px',
      fontSize:'20px'
    }
    const [count,setcount]=useState(0);
    const inc=()=>{
      let newcount=count+1;
      setcount(newcount);
    }
    const dec=()=>{
      let newcount=count-1;
      setcount(newcount);
    }
return(
  <div>
    <h1>count:{count}</h1>
    <button onClick={inc} style={x}>increase</button>
    <button onClick={dec} style={x}>decrease</button>

  </div>
)
  }

  function User(){
    let x1={
      fontSize:'25px',
      color:'green',
      fontStyle:'italic'
    }
 const[user,setuser]=useState([]);
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setuser(data))
 })
  

return(
  <div>
   <li>
    {
      user.map(x=><ul style={x1}>{x.name}</ul>)
    }
   </li>
  </div>
)
}
function App() {
  

return (
    <div className="App">
      <header className="App-header">
    <Counter></Counter>
    <User></User>

          </header>
    </div>
  );
}

export default App;
