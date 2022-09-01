import './Button.css';

const Button = (props) => {

  // const handlePick = () => {
  //   alert('Hello!')
  // }

  return (
    <div>
      <button
        className='big-button'
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        style={props.style} mode={props.mode}
      >
        {props.buttonText}
      </button>
    </div>
  )
}

export default Button;
