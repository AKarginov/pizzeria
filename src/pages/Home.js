import styles from "../components/Main.module.css";
import { RollingPizzaScroller } from "../components/scrollers/RollingPizzaScroller";
import {OvenScroller} from "../components/scrollers/OvenScroller";
import Footer from "../components/Footer";
export const Home = () => {
const scrollActivator = RollingPizzaScroller();
const OvenScrollActivator = OvenScroller();
    return (
        <main>
            <div className={styles.woodBack}>
                    <h2>We are making real Italian pizza since 2024</h2>
                    <div className={styles.texts_Wrapper}>
                    <h3 className={scrollActivator ? styles.visible : styles.notVisible}>Our pizza is more than just a meal — it's an experience. From the hand-stretched dough to the house-made tomato sauce, every ingredient is chosen with care. We use only fresh, locally sourced produce and premium cheeses for a flavor that speaks for itself. Savor the difference in every bite!</h3>
                <div className={styles.pizzaWrapper}>
                        <div className={styles.rollingPizza}></div>
                </div>
                <h3 className={scrollActivator ? styles.visible : styles.notVisible}>Inspired by classic Italian recipes and perfected by our chefs, we bring you pizza that balances tradition with a modern twist. Using high-quality flour and a unique blend of spices, we achieve a perfect, crispy crust and bold, unforgettable taste. Discover your new favorite today! </h3>
                        </div>
            </div>
            <div className={styles.woodOven_Block}>
                <h2>We are cooking our pizza in a wood-fired oven</h2> 
                <h4 className={OvenScrollActivator ? styles.visible : styles.notVisible}>At our pizzeria, we believe in bringing you the true taste of Italy. Our pizzas are carefully crafted with fresh ingredients and baked to perfection in a traditional wood-fired oven. The result? A crispy, smoky crust and rich, flavorful toppings that make each bite unforgettable. Come experience the magic of pizza made the way it should be fresh, fast, and full of flavor!</h4>
            </div>
        </main>
        
    )
}