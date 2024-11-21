import { useContext, useState, useEffect } from "react";
import styles from "../../components/menu.css.modules/CartSide.module.css";
import { CartAsideContext } from "../context/CartAsideContext";
import { AddedArrayContext } from "../context/AddedArrayContext";
import { IncreaseButton } from "./QuantityManipulation";
import { DecreaseButton } from "./QuantityManipulation";
import { DeleteAllButton } from "./QuantityManipulation";
import { HeaderContext } from "../context/HeaderContext";

export const CartSideMenu = () => {
  const { setIncrementCounter } = useContext(HeaderContext);
  const { asideVisibility } = useContext(CartAsideContext);
  const { itemsArray } = useContext(AddedArrayContext);

  const [totalSum, setTotalSum] = useState(0);

  // Обновляем сумму и общее количество товаров
  useEffect(() => {
    const finalResult = itemsArray.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotalSum(finalResult);

    const totalQuantity = itemsArray.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setIncrementCounter(totalQuantity); // Обновляем общий счётчик
  }, [itemsArray, setIncrementCounter]);

  return (
    <div className={`${styles.sideWrapper} ${asideVisibility ? styles.open : ""}`}>
      <div className={styles.motherWrapper}>
        <h3 className={styles.cartSideHeader}>Your Cart</h3>
        <ul>
          {itemsArray.length > 0 ? (
            itemsArray.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <img className={styles.cartItemImage} src={item.img} alt={item.name} />
                <div className={styles.cartItemInformationWrapper}>
                  <p className={styles.cartItemInformation}>{item.name}</p>
                  <div className={styles.cartItemLine}>
                    <div className={styles.cartItem_counter}>
                      <DecreaseButton id={item.id} />
                      <p className={styles.cartItem_ItemsCount}>{item.quantity}</p>
                      <IncreaseButton id={item.id} />
                    </div>
                    <p className={styles.cartItemInformation}>
                      <span>{item.price * item.quantity}</span>€
                    </p>
                    <DeleteAllButton id={item.id} />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className={styles.emptyCart}>Now your cart is empty. Add something new</p>
          )}
        </ul>
        <div className={styles.asideFooter}>
          <p className={styles.totalCounter}>Total: {totalSum}€</p>
          <button className={styles.confirmButton}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

