import React from "react";
import Transaction from "./Transaction";
import SearchBar from "./SearchBar";

function TransContainer({trans, setTrans, filteredTrans, search, setSearch}) {
  

  return (
    <div className="trans_container">
     <SearchBar search= {search} setSearch={setSearch}/>
    {filteredTrans.map(tran => <Transaction tran = {tran} key={tran.id} setTrans = {setTrans} />)}
    
    </div>
  );
}

export default TransContainer;