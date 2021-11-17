import { useState } from 'react';

import styles from './App.module.css';
import AddUserForm from './components/AddUserForm/AddUserForm';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  function handleAddUser(user) {
    setUsers((prevUsers) => [...prevUsers, user]);
  }

  return (
    <div className={styles.app}>
      <AddUserForm onAddUser={handleAddUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
