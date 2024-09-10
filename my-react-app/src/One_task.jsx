import React, { useState } from "react";
function One_task({details,data,click2,Update}){
const [view,setView]=useState(false)
const [value,setValue] = useState('')
    return (
    <>
    <ul><li>
       <div className="todo">
        <h3>{details}</h3>
        <button className="button" onClick={()=>click2(details)}>delete</button>
        <button className="buttonn" onClick={()=>setView(!view)}>Update</button>


       </div>
    </li>
    </ul>
    {view?
    <>
    <input type="text" placeholder="Change task" onChange={(e)=>setValue(e.target.value)}/>
<button onClick={()=>(Update(value,details))}>Change Task</button>
    </>:<></>}
    
    </>
    )
}
export default One_task