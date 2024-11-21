import styles from "../components/menu.css.modules/Deserts.module.css";
import { allDesertsMenu } from "../data/allDesertsMenu";
import { AddButton } from "../components/cart/AddButton";
export const Deserts = () => {
    return (
        <div className={styles.desertsWrapper}>
            <h3 className={styles.desertsTitle}>Our sweetest Deserts</h3>
            <div className={styles.desertsGrid}>
                {allDesertsMenu.map(deserts => {
                const {id,desertsTitle,price,vegetarian,image, description, nutrition}=deserts
                const {calories, protein, fat, carbs} = nutrition
                return (
                    <div key={id} className={styles.gridItem}>
                <img className={styles.desertsImage} src={image} alt={desertsTitle}/>
                <h5 className={styles.desertsUnitTitle} >{desertsTitle}</h5>
                {vegetarian?<h6 className={styles.desertsVegetarian}>vegetarian</h6>:<h6 className={styles.desertsIsNotVegetarian}>is not vegetarian</h6>}
                <p className={styles.desertsPrice}>{price}€</p>
                <p className={styles.desertsDescription}>{description}</p>
                <ul className={styles.desertsNutrition}>
                    <li>Proteins: {protein}</li>
                    <li>Fats: {fat}</li>
                    <li>Сarbohydrates: {carbs}</li>
                    <li>Total calories: {calories}</li>                   
                </ul>
                <AddButton name={desertsTitle} price={price} id={id} img={image}/>
                </div >
            )
            })}
            </div>
        </div>
    )

}