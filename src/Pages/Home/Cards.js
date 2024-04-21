import React,{useContext, useEffect,useState} from 'react';
import { FaRegHeart } from "react-icons/fa";
import  { useProducts } from './ProductContext';
import { PostContext } from './ViewContext';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../../firebase/firebase';

function Cards() {

    const {setPostDetails} = useContext(PostContext)
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const db = getFirestore(app);
        const productsCollection = collection(db, 'products');
        try {
          const data = await getDocs(productsCollection);
          const productsData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setProducts(productsData);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-8">
        <h2 className="text-black text-xl mb-8">Fresh recommendations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {/* Card 1 */}
            
             {products.map((pro)=>{
                return(
                    <div 
                    className="bg-white w-[288px] rounded-lg overflow-hidden shadow-md relative cursor-pointer"
                    onClick={()=>{
                      setPostDetails(pro)
                      navigate('/singlepost')
                    }}
                    >
                        <div className="absolute top-0 right-0 p-2 bg-white m-5 rounded-2xl cursor-pointer">
                          <FaRegHeart className='text-black' />
                        </div>
                        <img
                          src={pro.url}
                          alt="Dish 1"
                          className="w-full p-2 h-48 object-cover"
                        />
                        <div className="p-4">
                        <h5 className="text-gray-800 font-bold">₹ {pro.price}</h5>
                      <p className="text-gray-600 text-sm">{pro.description}</p>
                      <small className="text-gray-600">{pro.place}</small>
                        <small className="text-gray-600 absolute bottom-0 right-0">{pro.createdAt}</small>
                        </div>
                      </div>
                )
             })}
      

          </div>

      </div>
    </section>
  );
}

export default Cards;
