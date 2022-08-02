import React, {useState, useEffect} from "react";
import TransContainer from "./components/TransContainer";
import SearchBar from "./components/SearchBar";
import "./App.css"


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
      <div>
        {/* HELLO from APP */}
        <SearchBar search= {search} setSearch={setSearch}/>
        <TransContainer trans={trans} setTrans={setTrans}  filteredTrans= {filteredTrans}/>

      </div>
    </div>
  );
}

export default App;