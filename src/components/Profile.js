// import userEvent from '@testing-library/user-event';
import React from 'react';
import { useEffect, useState } from 'react';



function Profile() {
    const [elmo, setElmo] = useState("")
    useEffect (()=> {
        fetch('http://localhost:9292/users')
        .then(res => res.json())
        .then(data => setElmo(data))
      },[])
    
    const [amount, setAmount] = useState("")
    const [sendName, setSendName] = useState("")
    const [description, setDescription] = useState("")
    

    function handleSubmitForm (e){
        e.preventDefault()
        fetch('http://localhost:9292/transactions', {
          method: "POST",
          headers: {"Content-Type": "application/json",
          },
          body: JSON.stringify({
          sender_id: 1,
          receiver_id: sendName,
          amount: amount,
          description: description,
          })
        })
        .then(res=> res.json())
        .then(data=> (console.log(data)))
        setAmount("")
    
      }

    return (
            <div className="profile_container">
                <div className="profile_image_name">
                    <div><img className="profile_image" src={elmo.profile_pic} alt="" /></div>
                    <div className="profile_username">{elmo.name}</div><div className="profile_username">{elmo.handle}</div>
                </div>
                <div className="profile_value profile_balance_info"><div className="profile_balance">${elmo.balance}</div><span className="profile_flatmo"> in Flatmo</span></div>
                <div className="profile_value"></div>


                <form onSubmit= {handleSubmitForm}>
                    <input 
                        placeholder="Name"
                        value={sendName}
                        onChange = {e=> setSendName(e.target.value)}
                        size="20"
                        className="formfield"
                    />
                    <input 
                        placeholder="Amount" 
                        value={amount}
                        onChange = {e=> setAmount(e.target.value)}
                        size="20"
                        className="formfield"
                    />
                    <input 
                        placeholder="Description" 
                        value={description}
                        onChange = {e=> setDescription(e.target.value)}
                        size="20"
                        // height="10"
                        className="formfield"
                    />
                    <input className="Amountsubmit"
                        type="submit" 
                        value="SEND" 
                    />
                </form>
            </div>
    );
}
export default Profile;