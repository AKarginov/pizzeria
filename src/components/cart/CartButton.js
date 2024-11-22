import {useContext} from 'react'
import styles from "../../components/menu.css.modules/CartButton.module.css";
import { HeaderContext } from "../context/HeaderContext";
import { CartAsideContext } from '../context/CartAsideContext';
export const CartButton = () => {
    const {incrementCounter} = useContext(HeaderContext);
    const {setAsideVisibility} = useContext(CartAsideContext);
    const toggleMenu = ()=> {
        setAsideVisibility((prev) => !prev)
    }

    return (
        <li > 
            <button onClick={toggleMenu} className={styles.cart_button}>
                <img className={styles.cart_icon} src='../icons/cart_oscure.svg' alt='cart_icon' />
                <span className={`${styles.goldenCircle} ${incrementCounter === 0? styles.hidden: ''}`}>{incrementCounter}</span>
            </button>
        </li>
    )
}
