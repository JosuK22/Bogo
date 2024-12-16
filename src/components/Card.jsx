import { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ id, title, discount, price, originalPrice, isSelected, onSelect, numOptions, mostPopular }) => {
  // Create dynamic state for size and color dropdowns
  const [options, setOptions] = useState(
    Array.from({ length: numOptions }, () => ({ size: "S", color: "Black" }))
  );

  // Update size or color dynamically
  const handleOptionChange = (index, key, value) => {
    const newOptions = [...options];
    newOptions[index][key] = value;
    setOptions(newOptions);
  };

  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <div className={styles.cardHeader}>
        <div className={styles.inputSection}>
        <input
          type="radio"
          checked={isSelected}
          onChange={onSelect}
          className={styles.radio}
        />
        </div>
        

        <div className={styles.contentSection}>
            <div className={styles.details}>
                <div>
                    <strong className={styles.title}>{title}</strong>
                    <span className={styles.discount}>{discount}</span>
                </div>
                <div>
                    <span className={styles.currentPrice}>{price}</span>
                </div>
                
            </div>

            <div className={styles.price}>
                <p className={styles.currentPrice}>Standard Price</p>
                <span className={styles.strike}>{originalPrice}</span>
            </div>
        </div>
        

      </div>
      {mostPopular && <div className={styles.mostPopular}>MOST POPULAR</div>}

      {/* Render dropdown options dynamically */}
      {isSelected && (
        <div className={styles.options}>
          {options.map((option, index) => (
            <div key={index} className={styles.optionRow}>
              <label>#{index + 1}</label>
              <select
                value={option.size}
                onChange={(e) => handleOptionChange(index, "size", e.target.value)}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
              <select
                value={option.color}
                onChange={(e) => handleOptionChange(index, "color", e.target.value)}
              >
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
