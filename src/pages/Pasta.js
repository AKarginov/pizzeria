import styles from "../components/menu.css.modules/Pasta.module.css";
import { allPastaMenu } from "../data/allPastaMenu";
import { AddButton } from "../components/cart/AddButton";
export const Pasta = () => {
    return (
        <div className={styles.pastaWrapper}>
            <h3 className={styles.pastaTitle}>Our amazing Pasta</h3>
            <div className={styles.pastaGrid}>
                {allPastaMenu.map(pasta => {
                const {id,pastaTitle,price,vegetarian,image, description, nutrition}=pasta
                const {calories, protein, fat, carbs} = nutrition
                return (
                    <div key={id} className={styles.gridItem}>
                <img className={styles.pastaImage} src={image} alt={pastaTitle}/>
                <h5 className={styles.pastaUnitTitle} >{pastaTitle}</h5>
                {vegetarian?<h6 className={styles.pastaVegetarian}>vegetarian</h6>:<h6 className={styles.pastaIsNotVegetarian}>is not vegetarian</h6>}
                <p className={styles.pastaPrice}>{price}€</p>
                <p className={styles.pastaDescription}>{description}</p>
                <ul className={styles.pastaNutrition}>
                    <li>Proteins: {protein}</li>
                    <li>Fats: {fat}</li>
                    <li>Сarbohydrates: {carbs}</li>
                    <li>Total calories: {calories}</li>                   
                </ul>
                <AddButton name={pastaTitle} price={price} id={id} img={image}/>
                </div >
            )
            })}
            </div>
        </div>
    )

}