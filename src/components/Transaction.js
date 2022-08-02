
import React from "react";

function Transaction ({tran, sender, receiver, profile_pic}) {
  

  return (
    <div className="feed__transaction">
    <div className="transaction__description">
  
      <div className="transaction__icon">
        {/* <img
          src={sender.}
          alt={"profile-pic"}
          className={`smooth-image`}
        /> */}
      </div>

      <div className="transaction__details">

        <div className="transaction__names-amount">

          <div className="transaction__names">
            <span className="transaction__pay-name">{tran.amount}</span>
            <span className="transaction__paid"> paid </span>
            <span className="transaction__pay-name">receiver</span>
          </div>
        </div>

        <div className="transaction__details-date">
          <div className="transaction__date">{tran.date_time}&nbsp;</div>
        </div>

        <div className="transaction__message">{tran.description}</div>
      </div>
    </div>
    <div className="transaction__likes">
     Like Button
    </div>
    </div>
);

}

export default Transaction;