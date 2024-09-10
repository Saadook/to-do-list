import React from "react";
import { useState } from "react";

function Header ({add}){
    const [value,setValue]= useState("sadoook")
//console.log(add)
return(
    <>
    <div className="header">
<input type="text" placeholder="Add new task" onChange={(e)=>setValue(e.target.value)}/>
<button onClick={()=>(add(value))}>Add task</button>
    </div>
    </>
)

}
export default Header