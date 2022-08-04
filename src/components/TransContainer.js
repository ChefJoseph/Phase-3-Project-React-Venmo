import React from "react";
import Transaction from "./Transaction";
import SearchBar from "./SearchBar";

function TransContainer({trans, setTrans, filteredTrans, search, setSearch, handleFire}) {
  

  return (
    <div className="trans_container">
     <SearchBar search= {search} setSearch={setSearch}/>
    {filteredTrans.map(tran => <Transaction tran = {tran} key={tran.id} setTrans = {setTrans} handleFire={handleFire}/>)}
    
    </div>
  );
}

export default TransContainer;