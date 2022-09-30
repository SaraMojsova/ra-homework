import React, { useState } from 'react';
import logo from './logo.svg';

import { DATA } from './helpers/data';
import { UsersList } from './components/usersList/userList';
import { SearchField } from './components/searchField/searchField';

import './App.css';

function App() {
  const [users, setUsers] = useState(DATA);
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredUsers = users.filter(user => {
    return user.firstName.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1;
  });

  console.log('Render', searchKeyword, filteredUsers);

  const searchHandler = (event) => {
    const searchKeyword = event.target.value;
    console.log(searchKeyword);
    setSearchKeyword(searchKeyword);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Functional components in React
        </p>
      </header>
      <SearchField onChangeHandler={searchHandler} placeholder='Search by name' />
      <UsersList users={filteredUsers} />
    </div>
  );
}

export default App;
