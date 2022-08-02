
import React from "react";

function Transaction ({sender, receiver, amount, description, profile_pic, date_time}) {
  

  return (
    <div className="feed__transaction">
    <div className="transaction__description">

      <div className="transaction__icon">
        <img
          src=
          alt={"profile-pic"}
          className={`smooth-image`}
        />
      </div>

      <div className="transaction__details">

        <div className="transaction__names-amount">

          <div className="transaction__names">
            <span className="transaction__pay-name">{amount}</span>
            <span className="transaction__paid"> paid </span>
            <span className="transaction__pay-name">receiver</span>
          </div>
        </div>

        <div className="transaction__details-date">
          <div className="transaction__date">{date_time}&nbsp;</div>
        </div>

        <div className="transaction__message">{description}</div>
      </div>
    </div>
    <div className="transaction__likes">
     Like Button
    </div>
    </div>
);

}

export default Transaction;