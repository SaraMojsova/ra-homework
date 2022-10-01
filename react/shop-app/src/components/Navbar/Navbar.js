import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import NavbarButtons from './NavbarButtons';

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
}) {
  return (
    <NavBarContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='Logo' />
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {
            navItems.map(({ label, url, id }, index) => {
              console.log('Link navigation', label, url, index);
              return (
                // TODO: Implement Link component and add the url parameter
                <li key={`${index}_${id}`}>{label}</li>
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
