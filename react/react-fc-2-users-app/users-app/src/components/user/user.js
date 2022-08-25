import React, { useState } from 'react';
import { Accordion } from '../accordion/accordion';
import { UserDetailsBlock } from './userDetailsBlock';

import './user.css';

export const User = ({ user }) => {
  const [isEditable, setIsEditable] = useState(false);

  const {
    firstName,
    lastName,
    image,
    age,
    email,
    phone,
    gender,
    address,
  } = user;
  const fullName = `${firstName} ${lastName}`;

  const editUserHandler = () => {
    if (isEditable) {
      console.log('SAVE USER');
      // TODO: Implement user update
    }

    setIsEditable(!isEditable);
  }

  return (
    <Accordion image={image} title={fullName}>
      <div className='user'>
        <div className='user-details'>
          <UserDetailsBlock label='Name' value={fullName} isEditable={isEditable}/>
          <UserDetailsBlock label='Email' value={email} isEditable={isEditable}/>
          <UserDetailsBlock label='Age' value={age} isEditable={isEditable}/>
          <UserDetailsBlock label='Phone number' value={phone} isEditable={isEditable}/>
          <UserDetailsBlock label='Gender' value={gender} isEditable={isEditable}/>
          <UserDetailsBlock label='Address' value={address.address} isEditable={isEditable}/>
        </div>
        <button className='user-edit' onClick={editUserHandler}>
          {isEditable ? 'Save' : 'Edit'}
        </button>
      </div>
    </Accordion>
  )
};
