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
    <div className='input-container'>
      <form onSubmit={handleAddOption}>
        <input type="text" name="option" />
        <button className='button'>Add Option</button>
      </form>
      {error && <p className='error-message'>{error}</p>}
    </div>
  )
}

export default AddOptions;
