import { useState } from "react";

import '../Options/Options.css';

const AddOptions = (props) => {
  const [error, setError] = useState('');

  const handleAddOption = (e) => {
    console.log('EVENT: ', e)
    e.preventDefault();
    let option = e.target.elements.option.value.trim();
    console.log('OPTION', option)

    props.handleAddOption(option)
    const error = props.handleAddOption(option)
    console.log('ERROR', error)
    setError(error)

    if(!error) {
      e.target.elements.option.value = '';
    }
  }

  return (
    <div className='input-container' style={props.style} mode={props.mode}>
      <form onSubmit={handleAddOption}>
        <input type="text" name="option" style={props.style} mode={props.mode} />
        <button className='button' style={props.style} mode={props.mode}>Add Option</button>
      </form>
      {error && <p className='error-message' style={props.style} mode={props.mode}>{error}</p>}
    </div>
  )
}

export default AddOptions;
