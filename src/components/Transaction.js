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

  const [comments, setComments] = useState("")

  function handleSubmitForm (e){
    e.preventDefault()
    fetch('http://localhost:9292/transactions/${id}', {
      method: "PATCH",
      headers: {"Content-Type": "application/json",
      },
      body: JSON.stringify({
      comments: comments,
      })
    })
    .then(res=> res.json())
    .then(data=> (console.log(data)))
    setComments("")

  }

  return (
    

    <div className="feed__transaction">
    <div className="transaction__description">
  
      <div className="transaction__icon">
        <img
          src={tran.sender.profile_pic}
          alt={"profile_pic"}
          className="smooth-image"
        />
      </div>

      <div className="transaction__details">

        <div className="transaction__names-amount">
       
          <div className="transaction__names">
            <span className="transaction__pay-name">{tran.sender.name}</span>
            <span className="transaction__paid"> paid </span>
            <span className="transaction__pay-name">{tran.receiver.name}</span>
            <span> ${tran.amount} </span>
          </div>           
        </div>
        
        <div className="transaction__details-date">
          <div className="transaction__date">timestamp{tran.date_time}</div>
        </div>

        <div className="transaction__message">{tran.description}</div>
      </div>
    </div>
    <div className="transaction__likes">
    <LikeButton tran = {tran}/>
    </div>
    <div className = "comment feed">
      
    </div>
    <form className="transaction_comments" >
                    <input 
                        placeholder="Type your comment here." 
                        value={comments}
                        onChange = {e=> setComments(e.target.value)}
                        size="20"
                        // height="10"
                        className="comment"
                    />
      <input type="submit" value="Comment" onSubmit = {handleSubmitForm} ></input>
    </form>

    </div>
    
);

}

export default Transaction;