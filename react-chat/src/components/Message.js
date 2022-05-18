import styles from "./style.module.css";

console.log(styles);

export function Message({ message }) {
  return (
    <div className={styles.wrapper}>
      <h1>message:{message}</h1>
    </div>
  );
}
