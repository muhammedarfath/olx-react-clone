import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function useAuth() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                setUser(null);
                localStorage.removeItem('user');
            }
        });

        return () => unsubscribe();
    }, []);


    const SignUp = async (email, password, phone, username) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(collection(getFirestore(), 'users'), {
                id: userCredential.user.uid,
                phone: phone,
                username: username
            });
            toast('WELCOME TO OLX CLONE!',
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
           
        } catch (error) {
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
            
        }
    };

    const SignIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            toast("WELCOME TO OLX CLONE. NOW YOU'RE LOGGED IN",
            {
              icon: '👏',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            }
          );      
          } catch (error) {
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
        }
    };

    const Logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            localStorage.removeItem('user');
        } catch (error) {
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
        }
    };

    return { user, SignUp, SignIn, Logout };
}

export default useAuth;
