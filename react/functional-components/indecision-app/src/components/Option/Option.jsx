import RemoveOption from "../RemoveOption/RemoveOption";
// import { useState } from "react";
const Option = (props) => {
  const removeOptionText='Remove'
    // const [list,updateList]=useState()

  
  const handleDeleteOption=(event,optionToRemove)=>{
    // props.setOptions(props.options.filter(option=> optionToRemove!==option))
    event.target.style.display='none'
    // updateList(list.filter(option=> option !==optionToRemove))

    console.log('is working')
  }
  return (
    <>
    <div>{props.optionText}</div>
    <RemoveOption 
    removeOptionText={removeOptionText}
    handleDeleteOption={handleDeleteOption}
    />
    


    </>
  )
}

export default Option;
