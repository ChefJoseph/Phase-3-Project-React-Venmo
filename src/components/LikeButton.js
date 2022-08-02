import React, {useState} from "react"


function LikeButton() {
    const [like, setLike] = useState(false)

    function handleClickLike() {
        setLike(!like)
    }
 
    return (
        <button onClick = {handleClickLike}>{like? "Unlike": "Like"}
 </button>
    )
    
    }
    
    export default LikeButton