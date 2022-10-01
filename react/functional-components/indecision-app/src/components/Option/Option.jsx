import './Option.css'

const Option = (props) => {
  const removeOptionText='Remove'


  return (
    <>
    <div className='option'>
    <div>{props.optionText}</div>
    <button className="removeOption" onClick={()=> props.handleDeleteOption(props.optionText)}>
    {removeOptionText}
    </button> 
    </div>
    </>
  )
}

export default Option;
