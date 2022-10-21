// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';



function Profile({trans}) {
    const [elmo, setElmo] = useState("")
    useEffect (()=> {
        fetch('http://localhost:9292/users/1')
        .then(res => res.json())
        .then(data => {setElmo(data)
           
        })
        
      },[])

    
    const [amount, setAmount] = useState("")
    const [users, setUsers] = useState([])
    const [receiverID, setReceiverID] = useState(0)
    const [description, setDescription] = useState("")
    

    function handleSubmitForm (e){
        // e.preventDefault()
        fetch('http://localhost:9292/transactions', {
          method: "POST",
          headers: {"Content-Type": "application/json",
          },
          body: JSON.stringify({
          sender_id: 1,
          receiver_id: receiverID,
          amount: amount,
          description: description,
          })
        })
        .then(res=> res.json())
        .then(data=> (console.log(data)))
        setAmount("")
    
      }
    useEffect (()=> {
        fetch('http://localhost:9292/users')
        .then(res => res.json())
        .then(data => {setUsers(data)
           console.log(data)
        })
        
      },[])  

      function seeThis(value){
          console.log("see this: ", value)
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
                    {/* <input 
                        placeholder="Name"
                        value={recName}
                        onChange = {e=> setrecName(e.target.value)}
                        size="20"
                        className="formfield"
                    /> */}
                    <select onChange = {e=> setReceiverID(e.target.value)}>
                     <option> Select User</option>
                        {
                            users.map((user)=>(
                            <option key={user.id} 
                                title={user.id}
                                value={user.id}
                            >
                            {user.name}
                            </option>))
                        }
                    </select>
                    <input 
                        placeholder="Amount" 
                        value={amount}
                        onChange = {e=> setAmount(e.target.value)}
                        size="20"
                        className="formfield"
                    />
                    <input 
                        placeholder="Description"
                        rows={3}  
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