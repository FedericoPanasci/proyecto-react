import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../tabs/';
import { auth } from '../app/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AuthNavigator from '../stacks/auth';

const Nav = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setIsLogged(true);
                console.log('user is logged');
                console.log(user);
            } else (
                setIsLogged(false)
            )
        })
    }, [])
    return(
        <NavigationContainer>
        {
            isLogged ? <Main/> : <AuthNavigator/> 
        }
        </NavigationContainer>
        )
    }
export default Nav 