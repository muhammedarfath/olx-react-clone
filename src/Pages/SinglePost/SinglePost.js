import React ,{useState,useContext, useEffect} from 'react'
import { PostContext } from '../Home/ViewContext'
import Layout from '../../Layout/Layout';
import { db } from '../../firebase/firebase'; 
import { collection, query, where, getDocs } from 'firebase/firestore';
import { FiShare2 } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa6';
function SinglePost() {

    const [userDetails,setUserDetails]=useState()
    const {postDetails} = useContext(PostContext)


    useEffect(() => {
        const fetchUserDetails = async () => {
            const q = query(collection(db, 'users'), where('id', '==', postDetails.userId));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, ' => ', doc.data());
                setUserDetails(doc.data());
            });
        };

        fetchUserDetails();
    });


  return (
    <Layout>
        <section className="bg-[#002F3408] py-8 text-black">
        <div className="container mx-auto px-[20px] lg:px-[100px]">
            <div className="lg:flex mt-[20px] lg:mt-[139px]">
                <div className="p-4 w-full lg:w-3/4">
                    <img
                        src={postDetails.url}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4 w-full lg:w-5/12">
                    <div className="flex bg-[#ffff] border border-gray p-4 rounded mb-8 justify-between items-center">
                        <div>
                            <p className="font-bold text-4xl mb-2">&#x20B9; {postDetails.price} </p>
                            <small className="font-small"> {postDetails.name}</small>
                            <p className="font-xs mt-7">{postDetails.place}</p>
                        </div>
                        <div className="flex items-center">
                            <div className=" absolute flex gap-4 mb-[100px]">
                                <FiShare2 className="text-black text-2xl" />
                                <FaRegHeart className="text-black text-2xl" />
                            </div>
                            <small className="font-small text-gray-500 mr-5 mt-[100px]">today</small>
                        </div>
                    </div>

                    <div className="bg-[#ffff] border border-gray p-3 rounded mb-8">
                        <div className="flex items-center gap-5">
                            <img
                                src="https://statics.olx.in/external/base/img/avatar_4.png"
                                alt=""
                                className="w-[68px] h-[68px]"
                            />
                        {userDetails && (
                        <p className="font-bold text-2xl mb-2 tracking-wider">{userDetails.username}</p>
                        )}                                    
                        <FaChevronRight className='text-black text-2xl md:ml-[330px] lg:ml-[130px] sm:ml-[330px]'/>
                        </div>

                        <button className="bg-[#ffff] border border-black p-3 w-full hover:border-8">
                            chat with seller
                        </button>
                    </div>
                    <div className="bg-[#ffff] border border-gray p-3 rounded mb-8">
                        <p className="font-bold text-2xl mb-2">Posted in</p>
                        <small className="font-small">{postDetails.place}</small>
                    </div>
                </div>
            </div>
            <div className="bg-[#ffff] border border-gray w-full lg:w-[62%] ml-0 lg:ml-5 p-6">
                <p className="font-bold text-2xl mb-2">Description</p>
                <small>
                {postDetails.description}
                </small>
            </div>
        </div>
        </section>
    </Layout>

  )
}

export default SinglePost
