import React, {useState} from "react"


function LikeButton() {
    const [like, setLike] = useState(false)

    function handleClickLike() {
        setLike(!like)
    }
 
    return (
        <span onClick = {handleClickLike}>{like? "❤️": "🤍"}
 </span>
    )
    
    }
    
    export default LikeButton