import React, {useState, useEffect} from "react";
import TransContainer from "./components/TransContainer";
// import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import {Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar";
import "./index.css"
// import Login from "./components/Login";
import Home from "./pages/Home";


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
  

function handleFire(tran) {
  // console.log(bill)
  setTrans(trans.filter(t=> t.id !== tran.id))
}


  return (
    <div >
      <div >
        {/* <Login/> */}
        <NavBar />
        <TransContainer search= {search} setSearch={setSearch} trans={trans} setTrans={setTrans}  filteredTrans= {filteredTrans} handleFire={handleFire}/>
        <Profile trans={trans}/>
        <Routes>
          <Route exact path="/" element ={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
