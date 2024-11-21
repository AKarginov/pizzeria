// context/HeaderContext.js
import React, { createContext, useState } from "react";
// Создаем контекст
export const HeaderContext = createContext();

// Создаем провайдер контекста
export const HeaderProvider = ({ children }) => {
  const [cartDisplay, setCartDisplay] = useState(false);
  const [incrementCounter, setIncrementCounter] = useState(0);

  // const addButton = () => {
  //   setCartDisplay(true); // Логика для отображения корзины
  //   setIncrementCounter((prevCount) => prevCount + 1);
  // };

  return (
    <HeaderContext.Provider value={{ cartDisplay, /*addButton,*/ incrementCounter,setIncrementCounter,setCartDisplay }}>
      {children}
    </HeaderContext.Provider>
  );
};
