import Option from "../Option/Option";

import './Options.css';

const Options = (props) => {
  console.log('Options', props.options);
  return (
    <div className='remove-all' style={props.style} mode={props.mode}>
      <button
        className='button button_link remove_button'
        onClick={props.handleDeleteOptions}
        style={props.style} mode={props.mode}
      >
        {props.removeText}
      </button>
      <div className='remove-option' style={props.style} mode={props.mode}>
      {props.options.map((option) =>
        <Option
          key={option}
          optionText={option}
          style={props.style} mode={props.mode}
        />
      )}
      </div>
    </div>
  )
}

export default Options;
