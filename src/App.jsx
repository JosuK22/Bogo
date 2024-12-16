import { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/Card";

const App = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>YAY! It's BOGO</h1>
      <div className={styles.CardContainer}>
        <Card
          id={1}
          title="1 Unit"
          discount="10% Off"
          price="$10.00 USD"
          originalPrice="$24.00 USD"
          isSelected={selected === 1}
          onSelect={() => setSelected(1)}
          numOptions={1} // 1 option for Card 1
        />
        <Card
          id={2}
          title="2 Unit"
          discount="20% Off"
          price="$18.00 USD"
          originalPrice="$24.00 USD"
          isSelected={selected === 2}
          onSelect={() => setSelected(2)}
          mostPopular
          numOptions={2} // 2 options for Card 2
        />
        <Card
          id={3}
          title="3 Unit"
          discount="30% Off"
          price="$24.00 USD"
          originalPrice="$24.00 USD"
          isSelected={selected === 3}
          onSelect={() => setSelected(3)}
          numOptions={3} // 3 options for Card 3
        />
      </div>
      
      <div className={styles.footer}>
        <div className={styles.footerText}>
          <p className={styles.freeDelivery}>Free Delivery</p>
          <p className={styles.total}>
            Total :{" "}
            {selected === 1
              ? "$10.00 USD"
              : selected === 2
              ? "$18.00 USD"
              : "$24.00 USD"}
          </p>
        </div>
        
        <button className={styles.addToCart}>+ Add to Cart</button>
      </div>
    </div>
  );
};

export default App;
