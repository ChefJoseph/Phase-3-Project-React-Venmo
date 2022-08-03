import React, {useState, useEffect} from "react";
import TransContainer from "./components/TransContainer";
// import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
// import {Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import "./index.css"


function App() {
  const [trans, setTrans] = useState([])
  const [search, setSearch] = useState("")

  
  useEffect (()=> {
    fetch('http://localhost:9292/transactions')
    .then (res => res.json())
    .then(data => setTrans(data))
  },[])

const filteredTrans = trans.filter(tran=>       
  tran.description.toLowerCase().includes(search.toLowerCase())||
  // tran.sender.name.toLowerCase().includes(search.toLowerCase())||
  tran.amount.toString().includes(search.toString())
  // tran.receiver.name.toLowerCase().includes(search.toLowerCase())
)  
  
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <TransContainer search= {search} setSearch={setSearch} trans={trans} setTrans={setTrans}  filteredTrans= {filteredTrans}/>
        <Profile/>
      </div>
    </div>
  );
}

export default App;