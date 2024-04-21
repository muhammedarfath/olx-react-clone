import React, { useEffect,createContext,useContext,useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../../firebase/firebase';


const ProductContext = createContext([]);

export const useProducts = () => useContext(ProductContext);

function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const db = getFirestore(app);
            const productsCollection = collection(db, 'products');
            const data = await getDocs(productsCollection);
            const productsData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsData);
          };
          fetchData();
    },[]);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
