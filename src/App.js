import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import Card from './components/UI/Card';
import UsersList from './components/Users/UsersList.jsx';

function App() {
  const [usersList, setUsersList] = useState([]);

  /////////////////////////////////
  const getUsersHandler = data => setUsersList(prev => [...prev, data]);

  const removeHandler = intex =>
    setUsersList(prev => prev.filter((user, i) => i !== intex));

  /////////////////////////////////
  return (
    <Card classes="container card--width card--less">
      <AddUser onGetUser={getUsersHandler} />

      <UsersList users={usersList} onRemove={removeHandler} />
    </Card>
  );
}

export default App;
