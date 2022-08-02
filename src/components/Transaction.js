
import React, {useState, useEffect} from "react";
import LikeButton from "./LikeButton";

function Transaction ({tran}) {
  
   const [sender, setSender] = useState([])
   const [receiver, setReceiver] = useState ([])
  useEffect (()=> {
    fetch('http://localhost:9292/transaction_sender')
    .then (res => res.json())
    .then(data => setSender(data))
  },[])
  useEffect (()=> {
    fetch('http://localhost:9292/transaction_receiver')
    .then (res => res.json())
    .then(data => setReceiver(data))
  },[])

 

  return (
    <div className="feed__transaction">
    <div className="transaction__description">
  
      <div className="transaction__icon">
        <img
          src={sender.profile_pic}
          alt={"profile-pic"}
          className="smooth-image"
        />
      </div>

      <div className="transaction__details">

        <div className="transaction__names-amount">
       
          <div className="transaction__names">
            <span className="transaction__pay-name">{sender.name}</span>
            <span className="transaction__paid"> paid </span>
            <span className="transaction__pay-name">{receiver.name}</span>
          </div>
          ${tran.amount}
        </div>
        
        <div className="transaction__details-date">
          <div className="transaction__date">day_here{tran.date_time}&nbsp;</div>
        </div>

        <div className="transaction__message">{tran.description}&nbsp;</div>
      </div>
    </div>
    <div className="transaction__likes">
     <LikeButton/>
    </div>
    &nbsp;
    </div>
);

}

export default Transaction;