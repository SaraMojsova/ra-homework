import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import NavbarButtons from './NavbarButtons';
import { useState,  } from 'react';
import { Link} from 'react-router-dom';

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 80px;
    }

    .nav-toggle {
      background: transparent;
      border: transparent;
      color: #FFF;
      cursor: pointer;

      svg {
        font-size: 32px;
      }
    }
  }

  .nav-links {
    display: none;
    list-style: none;
  }
  .link-style{
    color:white;
    text-decoration:none;
}

  @media (min-width: 992px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-toggle {
      display: none;
    }

    .nav-links {
      display: flex;
      justify-content: center;

      li {
        margin: 0 8px;
      }
    }
  }
`;

function NavBar({
  navItems = [],
  isOpen,
  setIsOpen,
  isLoggedIn
}) {

    // const [isOpen,setIsOpen]=useState(false)


  return (
    <NavBarContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='Logo' />
          <button className='nav-toggle' onClick={()=>{setIsOpen(!isOpen)}}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {
            navItems.map(({ label, url, id, authRequired }, index) => {
              console.log('Link navigation', label, url, index);
              console.log(authRequired)
              console.log('Url',url)
              if(!isLoggedIn && authRequired)
              return null;
              
              else
              return (
                // TODO: Implement Link component and add the url parameter
                <li key={`${index}_${id}`}>
                 <Link className='link-style'
                 to={url}>{label}</Link> 
                 </li>
              )
            })
          }
        </ul>
        <NavbarButtons />
      </div>
    </NavBarContainer>
  )
}

export default NavBar;
