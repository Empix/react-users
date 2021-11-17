import Card from '../UI/Card/Card';

import styles from './UsersList.module.css';

export default function UsersList(props) {
  function drawList() {
    if (!props.users.length) {
      return <h2 className={styles['empty-list']}>No registered user.</h2>;
    }

    return props.users.map(({ id, username, age }) => (
      <li key={id}>
        {username} ({age} years old)
      </li>
    ));
  }

  return (
    <Card>
      <ul className={styles.list}>{drawList()}</ul>
    </Card>
  );
}
