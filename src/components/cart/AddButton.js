import { useContext } from "react";
import styles from "../../components/menu.css.modules/AddToCartButton.module.css";
import { AddedArrayContext } from "../context/AddedArrayContext";
import { HeaderContext } from "../context/HeaderContext";




export const AddButton = ({ name, price, id, img }) => {
  const { itemsArray,setItemsArray } = useContext(AddedArrayContext);
  const { setIncrementCounter,setCartDisplay } = useContext(HeaderContext);

  const addToCart = () => {
      setCartDisplay(true)  
      // Увеличиваем общий счётчик товаров
      
    // Добавляем товар в массив корзины
    
setItemsArray((prevItems) => {
      // Проверяем, есть ли товар с таким id в корзине
      const existingItem = prevItems.find((item) => item.id === id);

      if (existingItem) {
        // Если товар есть, увеличиваем его количество
        return prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Если товара нет, добавляем его с количеством 1
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
