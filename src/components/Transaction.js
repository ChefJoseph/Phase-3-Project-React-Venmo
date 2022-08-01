import userEvent from "@testing-library/user-event";
import React from "react";

function Transaction ({sender, receiver, amount, description, profile_pic, date_time}) {
  

  return (
    <div className="feed__transaction">
    <div className="transaction__description">

      <div className="transaction__icon">
        <img
          src={receiver.profile_pic}
          alt={"profile-pic"}
          className={`smooth-image`}
        />
      </div>

      <div className="transaction__details">

        <div className="transaction__names-amount">

          <div className="transaction__names">
            <span className="transaction__pay-name">{sender.name}</span>
            <span className="transaction__paid"> paid </span>
            <span className="transaction__pay-name">{receiver.name}</span>
          </div>
        </div>

        <div className="transaction__details-date">
          <div className="transaction__date">{date_time}&nbsp;</div>
        </div>

        <div className="transaction__message">{description}</div>
      </div>

      {receiver.id === user.id
        ? <div className="transaction__amount">$<NumberFormat value={amount} displayType={'text'} decimalScale={2} fixedDecimalScale={true} /></div>
        : sender.id === user.id &&
          <div className="transaction__amount payee">-$<NumberFormat value={amount} displayType={'text'} decimalScale={2} fixedDecimalScale={true} /></div>
      }
    </div>
    <div className="transaction__likes">
     Like Button
    </div>
    </div>
);

}

export default Transaction;