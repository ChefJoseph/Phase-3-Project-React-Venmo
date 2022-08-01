import React from "react";
import Transaction from "./Transaction";

function TransContainer({trans, setTrans}) {
  

  return (
    <div className="Trans-container">
    {trans.map(trans => <Transaction {...trans} key={trans.id} setTrans = {setTrans} />)}
    </div>
  );
}

export default TransContainer;