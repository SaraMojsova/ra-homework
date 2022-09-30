import React from 'react';
import { User } from '../user/user';

export const UsersList = ({ users = [] }) => {
  return (
    <div className='users'>
      {
        users.map((user) => {
          return <User key={user.id} user={user} />; // TODO user component
        })
      }
    </div>
  )
};
