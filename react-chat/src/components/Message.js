import sty from "./style.module.css";

export function Message({ message }) {
  return (
    <div className={sty.wrapper}>
      <h1>message:{message}</h1>
    </div>
  );
}
