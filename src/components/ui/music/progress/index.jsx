import styles from "./index.css";

export const Progress = ({ value, onChange, onMouseUp, onTouchEnd }) => {
  return (
    <div className={styles.container}>
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={value}
        className={styles.slider}
        id="myRange"
        onChange={onChange}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        style={{
          background: `linear-gradient(90deg, var(--progessUsed) ${Math.floor(
            value
          )}%, var(--progressLeft) ${Math.floor(value)}%)`,
        }}
      ></input>
    </div>
  );
};
