import styles from "../components/menu.css.modules/Pizza.module.css";
import { allPizzaMenu } from "../data/allPizzaMenu";
import { AddButton } from "../components/cart/AddButton";
export const Pizza = () => {
    return (
        <div className={styles.pizzaWrapper}>
            <h3 className={styles.pizzaTitle}>Our delicious Pizza</h3>
            <div className={styles.PizzaGrid}>
                {allPizzaMenu.map(pizza => {
                const {id,pizzaTitle,price,vegetarian,image, description, nutrition}=pizza
                const {calories, protein, fat, carbs} = nutrition
                return (
                    <div key={id} className={styles.gridItem}>
                <img className={styles.pizzaImage} src={image} alt={pizzaTitle}/>
                <h5 className={styles.pizzaUnitTitle} >{pizzaTitle}</h5>
                {vegetarian?<h6 className={styles.pizzaVegetarian}>vegetarian</h6>:<h6 className={styles.pizzaIsNotVegetarian}>is not vegetarian</h6>}
                <p className={styles.pizzaPrice}>{price}€</p>
                <p className={styles.pizzaDescription}>{description}</p>
                <ul className={styles.pizzaNutrition}>
                    <li>Proteins: {protein}</li>
                    <li>Fats: {fat}</li>
                    <li>Сarbohydrates: {carbs}</li>
                    <li>Total calories: {calories}</li>                   
                </ul>
                <AddButton name={pizzaTitle} price={price} id={id} img={image}/>
                </div >
            )
            })}
            </div>
        </div>
    )

}

