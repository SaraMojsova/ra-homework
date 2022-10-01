import Option from "../Option/Option";

import './Options.css';

const Options = (props) => {
  console.log('Options', props.options);
  return (
    <div className='remove-all'>
      <button
        className='button button_link remove_button'
        onClick={props.handleDeleteOptions}
      >
        {props.removeText}
      </button>
      <div className='remove-option'>
      {props.options.map((option) =>
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      )}
      </div>
    </div>
  )
}

export default Options;
