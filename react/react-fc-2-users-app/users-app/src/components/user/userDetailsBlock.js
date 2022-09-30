import React from 'react';

// export const UserDetailsBlock = () => {
//   return ()
// }

export const UserDetailsBlock = ({
  label,
  value,
  isEditable
}) => (
  <div className='user-details-block'>
    <h2>{label}</h2>
    {isEditable?
    (<input defaultValue={value}></input>):
    (<p>{value}</p>)}
  </div>
);
