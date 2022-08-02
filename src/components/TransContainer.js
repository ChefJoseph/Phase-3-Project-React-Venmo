import React from "react";
import Transaction from "./Transaction";

function TransContainer({trans, setTrans}) {
  

  return (
    <div className="Trans-container">
      Hello from TransContainer
    {trans.map(tran => <Transaction tran = {tran} key={tran.id} setTrans = {setTrans} />)}
    </div>
  );
}

export default TransContainer;