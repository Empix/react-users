import { useState } from 'react';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import Modal from '../UI/Modal/Modal';

import styles from './AddUserForm.module.css';

export default function AddUserForm(props) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const [errorInfo, setErrorInfo] = useState({ title: '', message: '' });

  function verifyInputs() {
    if (!username.trim()) {
      setErrorInfo({
        title: 'Username is required',
        message: 'Please enter a username.',
      });
      return;
    }

    if (!age) {
      setErrorInfo({
        title: 'Age is required',
        message: 'Please enter an age.',
      });
      return;
    }

    if (+age < 1) {
      setErrorInfo({
        title: 'Age must be positive',
        message: 'Please enter a positive age.',
      });
      return;
    }

    return true;
  }

  function clearInputs() {
    setUsername('');
    setAge('');
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!verifyInputs()) return;

    const user = {
      id: Math.random().toString(),
      username,
      age: +age,
    };

    clearInputs();
    props.onAddUser(user);
  }

  return (
    <>
      <Card>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <Input
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <Input
            id="age"
            type="number"
            label="Age (Years)"
            value={age}
            onChange={({ target }) => setAge(target.value)}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>

      {errorInfo.title && (
        <Modal
          title={errorInfo.title}
          onClose={() => setErrorInfo({ title: '', message: '' })}
        >
          {errorInfo.message}
        </Modal>
      )}
    </>
  );
}
