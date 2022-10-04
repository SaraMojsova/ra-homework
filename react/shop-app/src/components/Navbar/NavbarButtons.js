import styled from 'styled-components';

import search from '../../assets/search.svg';
import cart from '../../assets/cart.svg';
import user from '../../assets/user.svg';
import { NavLink } from 'react-router-dom';

const NavbarButtonsContainer = styled.div`
  display: none;

  .btn-container {
    width: 40px;
    margin-right: 4px;
    cursor: pointer;

    img {
      max-height: 20px;
    }
  }

  .cart-btn {
    position: relative;

    .cart-values {
      position: absolute;
      top: -10px;
      font-weight: 700;
    }
  }

  .auth-btn {
    background: transparent;
    border: transparent;
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;

// TODO: Implmenet Link component for all navigation buttons
const NavbarButtons = ({ isLoggedIn }) => {
  const logOutHandler=()=>{
    if(!isLoggedIn){
      console.log('Log out')
    }
  }

  return (
    <NavbarButtonsContainer>
      <div className='search-btn btn-container'>
        <img src={search} alt='Search' />
      </div>
      <div className='cart-btn btn-container'>
        <img src={cart} alt='Cart' />
        <span className='cart-values'>0</span>
      </div>
      {isLoggedIn ? (
        <button className='auth-btn btn-container'>
          <img src={user} alt='Logged out user' />
        </button>
      ) : (
        <NavLink to='/login'>
        <button className='auth-btn btn-container' onClick={logOutHandler}>
          <img src={user} alt='Logged in user' />
        </button>
        </NavLink>
      )}
    </NavbarButtonsContainer>
  );
};

export default NavbarButtons;
