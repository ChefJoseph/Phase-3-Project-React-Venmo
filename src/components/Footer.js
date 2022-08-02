import React from "react"
import {Route, Routes} from "react-router-dom"

import Pay from "../pages/Pay"
import Home from "../pages/Home.js"


function Footer() {


return (
<div>
    <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/Pay" element ={<Pay/>} />
    </Routes>
</div>
)

}

export default Footer