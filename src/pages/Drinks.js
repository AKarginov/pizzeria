
import styles from "../components/menu.css.modules/Drinks.module.css";
import { allDrinksMenu } from "../data/allDrinksMenu";
import { AddButton } from "../components/cart/AddButton";
export const Drinks = () => {
    return (
        <div className={styles.drinksWrapper}>
            <h3 className={styles.drinksTitle}>Our tasty Drinks</h3>
            <div className={styles.drinksGrid}>
                {allDrinksMenu.map(drinks => {
                const {id,drinksTitle,price,isAlcohol,image, description, nutrition}=drinks
                const {calories, alcohol} = nutrition
                return (
                    <div key={id} className={styles.gridItem}>
                <img className={styles.drinksImage} src={image} alt={drinksTitle}/>
                <h5 className={styles.drinksUnitTitle} >{drinksTitle}</h5>
                {isAlcohol?<h6 className={styles.drinksHasAlcohol}>Alcohol</h6>:<h6 className={styles.drinksHasNotAlcohol}>Alcohol Free</h6>}
                <p className={styles.drinksPrice}>{price}€</p>
                <p className={styles.drinksDescription}>{description}</p>
                <ul className={styles.drinksNutrition}>
                    <li>Alcohol: {alcohol}%</li>
                    <li>Total calories: {calories}</li>                   
                </ul>
                <AddButton name={drinksTitle} price={price} id={id} img={image}/>
                </div >
            )
            })}
            </div>
        </div>
    )

}