import React from "react";
import TransContainer from "./TransContainer";

function Feed ({trans, setTrans}) {



return (
    <div>
        Hello from Feed
        <TransContainer trans = {trans} setTrans = {setTrans} />
    </div>
)

}

export default Feed