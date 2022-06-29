import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../tabs/';
import { auth } from '../app/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Auth from '../stacks/auth';

const Nav = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setIsLogged(true);
                console.log('estoy en index');
                console.log(user);
            }
        })
    }, [])
    return(
        <NavigationContainer>
        {
            isLogged ? <Main/> : <Auth/> 
        }
        </NavigationContainer>
        )
    }
export default Nav 