import React, { useState, useRef,useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { LuCamera } from "react-icons/lu";
import { storage } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

function SellForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [place, setPlace] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const date = new Date();

    const storedUser = localStorage.getItem('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;

    useEffect(() => {

        if (parsedUser && parsedUser.email) {
          navigate('/sell');
        }else{
            navigate("/")
        }
      }, []);


      const handleCameraClick = () => {
        fileInputRef.current.click();
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
          console.error("No image selected");
          return;
        }
      
        const storageRef = ref(storage, `/images/${image.name}`);
      
        uploadBytesResumable(storageRef, image)
          .then((snapshot) => {
            console.log('File uploaded successfully');
            return getDownloadURL(snapshot.ref);
          })
          .then((url) => {
            console.log(url);
            addDoc(collection(getFirestore(), 'products'), {
              name,
              description,
              price,
              place,
              url,
              userId: parsedUser?.uid,
              createdAt: date.toDateString()
            })
            .then(() => {
              toast('YOUR PRODUCT ADDED SUCCESSFULLY',
              {
                icon: '👏',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }
            );
            navigate('/');
            })
            .catch((error) => {
              toast('SOMETHING IS WRONG:',error,
              {
                icon: '👏',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }
            );         
            });
          })
          .catch((error) => {
            alert("Error uploading file:", error);
          });
      };
      


    

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full p-6 top-0 left-0 z-50 fixed bg-white shadow-md">
        <div className="ml-5">
          <Link to='/post' className="text-[#002f34] cursor-pointer text-xl">
          <FaArrowLeftLong className='text-[#002f34] cursor-pointer text-xl'/>
          </Link>
        </div>
      </div>
      <div className="container mx-auto items-center  mt-[69px]">
        <h1 className='font-bold text-2xl text-center mb-4'>POST YOUR AD</h1>
        <section className="bg-white  shadow-md rounded px-4 pt-4 pb-6">
          <div className='border-b-2 p-3'>
            <h3 className="text-gray-700 text-lg font-bold mb-2">SELECTED CATEGORY</h3>
            <small>Cars  /  Cars Change</small>
          </div>
          <form action="designer-finish.html" className="w-full" onSubmit={handleSubmit}>
            <div className="m-5">
              <h3 className="text-gray-700 text-lg font-bold mb-2">INCLUDE SOME DETAILS</h3>
            </div>

            <div className="mb-2">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold">Item:</label>
              <input type="text" name="name" onChange={(e)=>setName(e.target.value)}  className="form-input mt-1 text-black block w-1/2 border-gray-300 border p-2"/>
            </div>

            <div className="mb-2">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold">Description:</label>
              <textarea type="description" onChange={(e)=>setDescription(e.target.value)} name="description" className="form-input mt-1 block w-1/2 border-gray-300 border p-2"/>
            </div>

            <div className="mb-2">
              <label htmlFor="place" className="block text-gray-700 text-sm font-bold">Place:</label>
              <input type="tel" name="place" onChange={(e)=>setPlace(e.target.value)}  className="form-input mt-1 block w-1/2 border-gray-300 border p-2"/>
            </div>

            <div className="mb-2">
              <label htmlFor="price" className="block text-gray-700 text-sm font-bold">Price:</label>
              <input type="text" name="price" onChange={(e)=>setPrice(e.target.value)}  className="form-input mt-1 block w-1/2 border-gray-300 border p-2"/>
            </div>
            <div className="mb-2">
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold">Add Image:</label>
              <div>
                <label htmlFor="file_archive" className="block text-gray-700 text-sm font-bold mr-2"/>
                <div className="flex items-center justify-center p-[45px] border-2 border-black w-[220px]" onClick={handleCameraClick}>
                <LuCamera className='text-[#002f34]' />
                <input type="file" accept="image/*" multiple={true} onChange={(e)=>setImage(e.target.files[0])} className="hidden" ref={fileInputRef} />
              </div>

              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="images" className="block text-gray-700 text-sm font-bold">Uploaded Images:</label>
              <div className="flex flex-wrap">
              <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
            
              </div>
            </div>

            <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">Submit</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default SellForm
