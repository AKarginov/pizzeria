import { useContext } from "react";
import styles from "../../components/menu.css.modules/AddToCartButton.module.css";
import { AddedArrayContext } from "../context/AddedArrayContext";
import { HeaderContext } from "../context/HeaderContext";

export const AddButton = ({ name, price, id, img }) => {
  const {setItemsArray } = useContext(AddedArrayContext);
  const { setCartDisplay } = useContext(HeaderContext);
  const addToCart = () => {
      setCartDisplay(true)  

setItemsArray((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { name, price, id, img, quantity: 1 }];
      }
    });
  };

  return (
    <button onClick={addToCart} className={styles.addToCartButton}>
      <span>Add to cart</span>
    </button>
  );
};
