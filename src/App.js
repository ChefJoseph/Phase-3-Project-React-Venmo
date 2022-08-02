import React, {useState, useEffect} from "react";
import TransContainer from "./components/TransContainer";
import "./App.css"


function App() {
  const [trans, setTrans] = useState([])
  
  useEffect (()=> {
    fetch('http://localhost:9292/transactions')
    .then (res => res.json())
    .then(data => setTrans(data))
  },[])

//   const [hideForm, setHideForm] = useState(true)
//   function handleHideForm() {
//     setHideForm(!hideForm)
//   }

//   function addPoem(newPoem){
//     setPoems([...poems, newPoem])
//   }
  
  return (
    <div className="app">
      <div>
        HELLO from APP
        <TransContainer trans={trans} setTrans={setTrans}/>
      
      </div>
    </div>
  );
}

export default App;