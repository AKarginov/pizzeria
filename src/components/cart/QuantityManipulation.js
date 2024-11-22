import { useContext } from "react";
import styles from "../../components/menu.css.modules/QMB.module.css";
import { AddedArrayContext } from "../context/AddedArrayContext";

export const IncreaseButton = ({ id }) => {
  const {setItemsArray } = useContext(AddedArrayContext);

  const handleIncrease = () => {
    setItemsArray((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <button onClick={handleIncrease} className={styles.quantityButton_plusButton}>
        <span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12H5L5 0L7 8.74228e-08L7 12Z" fill="#838383"></path>
                <path d="M12 5V7H0V5H12Z" fill="#838383"></path>
            </svg>
        </span>
    </button>
  );
};

export const DecreaseButton = ({ id }) => {
  const {setItemsArray } = useContext(AddedArrayContext);

  const handleDecrease = () => {
    setItemsArray((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };

  return (
    <button className={styles.quantityButton_minusButton} onClick={handleDecrease} >
        <span>
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0V2H0V0H12Z" fill="#A3A3A3"></path>
            </svg>
        </span>
    </button>
  );
};

export const DeleteAllButton = ({ id }) => {
  const {setItemsArray } = useContext(AddedArrayContext);

  const handleDelete = () => {
    setItemsArray((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  return (
    <button onClick={handleDelete} className={styles.quantityButton_deleteButton}>
         <span>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.82253 0.183533C7.70917 0.0699177 7.55526 0.00606751 7.39477 0.00606751C7.23427 0.00606751 7.08037 0.0699177 6.96701 0.183533L4 3.14448L1.03299 0.177466C0.919632 0.0638502 0.765729 0 0.605233 0C0.444737 0 0.290834 0.0638502 0.177474 0.177466C-0.0591581 0.414099 -0.0591581 0.796352 0.177474 1.03298L3.14448 4L0.177474 6.96701C-0.0591581 7.20364 -0.0591581 7.58589 0.177474 7.82253C0.414107 8.05916 0.796359 8.05916 1.03299 7.82253L4 4.85551L6.96701 7.82253C7.20364 8.05916 7.58589 8.05916 7.82253 7.82253C8.05916 7.58589 8.05916 7.20364 7.82253 6.96701L4.85552 4L7.82253 1.03298C8.05309 0.802419 8.05309 0.414099 7.82253 0.183533Z" fill="#A3A3A3"></path>
            </svg>
        </span>
    </button>
  );
};
