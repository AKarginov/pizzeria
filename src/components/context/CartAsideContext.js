import React, { createContext, useState } from "react";

export const CartAsideContext = createContext();

export const CartAsideProvider = ({ children }) => {
const [asideVisibility, setAsideVisibility] = useState(false);


return (
    <CartAsideContext.Provider value={{ asideVisibility,setAsideVisibility }}>
      {children}
    </CartAsideContext.Provider>
  );


}