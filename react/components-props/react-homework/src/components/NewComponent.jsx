import React from "react";

const NewComponent =({array})=>{
    return(
        array? (
        <>
            <p>Array passed in new component: {array} </p>
            <div>
                
                <p>Array map:</p>
                {array.map((element,index)=>(
                <ul key={index}>
                    <li>{element}</li>
                </ul>
                ))}
            </div>
        </>
    ): (
        <p>No data provided here</p>
    )
    )
}

export default NewComponent;