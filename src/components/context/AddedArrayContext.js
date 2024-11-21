import React, { createContext, useState } from "react";

export const AddedArrayContext = createContext();

export const AddedArrayProvider = ({ children }) => {
    const [itemsArray, setItemsArray] = useState([]);



return (
    <AddedArrayContext.Provider value={{ itemsArray, setItemsArray }}>
      {children}
    </AddedArrayContext.Provider>
  );


}