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
      >
        {props.buttonText}
      </button>
    </div>
  )
}

export default Button;
