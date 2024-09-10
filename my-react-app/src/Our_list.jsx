import React from "react";
import One_task from"./One_task";

function Our_list({data,click2,Update}){
    console.log(data);
    
    return(
        <>
        {data?.map((element)=>{
            return(<One_task Update={Update} click2={click2} details={element}/>)
        }
    )}
        </>
    )
    
}

export default Our_list