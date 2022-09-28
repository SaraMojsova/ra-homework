import './RemoveOption.css'
const RemoveOption=(props)=>{
    return(
        // <button onClick={e=>{
        //     props.handleDeleteOption(props.optionText)
        //   }} //
        // >
        <button className='btn' onClick={props.handleDeleteOption}>
        {props.removeOptionText}
        </button>
    )
}

export default RemoveOption;