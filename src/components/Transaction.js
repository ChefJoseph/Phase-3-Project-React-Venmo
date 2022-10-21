import React, {useState, useEffect} from "react";
import LikeButton from "./LikeButton";

function Transaction ({tran, handleFire}) {
  

  const [comments, setComments] = useState("")

  function handleSubmitForm(id){
  
    fetch(`http://localhost:9292/transactions/${id}`, {
      method: "POST",
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
  
  function handleDelete (id) {
    fetch(`http://localhost:9292/transactions/${id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json",
      },
     
    })
    .then(res=> res.json())
    .then(data=> (console.log(data)))
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
      {tran.comments}
    </div>
    <form className="transaction_comments" onSubmit = {handleSubmitForm}>
                    <input 
                        placeholder="Type your comment here." 
                        value={comments}
                        onChange = {e=> setComments(e.target.value)}
                        size="20"
                        // height="10"
                        className="comment"
                    />
      <input type="submit" value="Comment" ></input>
    </form>
      <button onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  handleFire(tran)
                  handleDelete(tran.id)
      }}
      >
      Delete
      </button>
    </div>
    
);

}

export default Transaction;