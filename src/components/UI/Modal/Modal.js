import Button from '../Button/Button';

import styles from './Modal.module.css';

export default function Modal(props) {
  function handleClickOutsideModel(event) {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  }

  return (
    <div className={styles.wrapper} onClick={handleClickOutsideModel}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <h1>{props.title}</h1>
        </div>
        <div className={styles.description}>
          <p>{props.children}</p>
        </div>
        <div className={styles.button}>
          <Button onClick={props.onClose}>Okay</Button>
        </div>
      </div>
    </div>
  );
}
