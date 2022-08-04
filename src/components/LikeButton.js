import React, {useState} from "react"


function LikeButton({tran}) {
   
    function addLike (e){
        e.preventDefault()
        fetch('http://localhost:9292/transactions/${:id}', {
          method: "PATCH",
          headers: {"Content-Type": "application/json",
          },
          body: JSON.stringify({
          like: !like
          })
        })
        .then(res=> res.json())
        .then(data => console.log(data))
    
      }

    const [like, setLike] = useState(false)

    function handleClickLike() {
        setLike(!like)
    }
 
    return (
        <span onClick = {addLike}>{like? "❤️": "🤍"}
 </span>
    )
    
    }
    
    export default LikeButton