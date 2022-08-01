import React, {useState,useEffect} from "react";
import TransContainer from "./TransContainer";
// import NewPoemForm from "./NewPoemForm";
// import ShowHideButton from "./ShowHideButton";
import { useEffect } from "react/cjs/react.production.min";

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
        <TransContainer trans={trans} setTrans = {setTrans}/>
      </div>
    </div>
  );
}

export default App;