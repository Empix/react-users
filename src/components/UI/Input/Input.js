import styles from './Input.module.css';

export default function Input(props) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
