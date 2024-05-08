import styles from "./ToggleButton.module.scss";

function ToggleButton({ items, selected, onClickItem }) {
  return (
    <div className={styles.toggle}>
      {items.map(({ label, value }) => {
        return (
          <button
            key={value}
            type="button"
            onClick={() => onClickItem(value)}
            className={`${styles.item} ${
              selected === value && styles.selected
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default ToggleButton;
