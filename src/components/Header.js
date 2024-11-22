import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./Headers.module.css";
import { HeaderContext } from "./context/HeaderContext";
import { CartButton } from "./cart/CartButton";
import { CartSideMenu } from "./cart/CartSideMenu";

const Header = () => {
  const {cartDisplay} = useContext(HeaderContext);
  

  return (
    <>
    <header className={styles.header}>
      <nav>
        <ul className={styles.header_ul}>
          <Link to="/"><img className={styles.logo_image} src='../icons/AntonioLogo.svg' alt='logo_image' /></Link>
          <li><Link className={styles.header_links} to="/">Home</Link></li>
          <li><Link className={styles.header_links} to="/pizza">Pizza</Link></li>
          <li><Link className={styles.header_links} to="/pasta">Pasta</Link></li>
          <li><Link className={styles.header_links} to="/drinks">Drinks</Link></li>
          <li><Link  className={styles.header_links} to="/deserts">Deserts</Link></li>
          {cartDisplay && <CartButton />}
        </ul>
      </nav>
    </header>
      <CartSideMenu/>
    <h1 className="antonio_Head_Title">Uncle Antonio</h1>
    
    </>
    
  );
};

export default Header;
