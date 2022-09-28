import './Header.css';

const Header = (props) => {
  return (
    <div className='header' style={props.style} mode={props.mode} >
      <h1 className='header_title'>{props.title}</h1>
      <h2 className='header_subtitle'>{props.subtitle}</h2>
    </div>
  )
}

export default Header;
