import React, { createContext, useEffect, useState } from "react";
import UserList from "./components/UserList";

export const ProductContext = createContext()
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts(){
        const response = await fetch("https://fakestoreapi.com/products?utm_source=chatgpt.com");
        const data = await response.json()
        setProducts(data)
       
      }
      getProducts()
      
    }, []);
    
    return(
     <ProductContext.Provider value={products}>
       <UserList/>
     </ProductContext.Provider>
    )
}

export default App;
