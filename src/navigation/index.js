import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../tabs/';
import { auth } from '../app/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AuthNavigator from '../stacks/auth';
import { AppContext } from '../app/Provider';
import { getItems } from '../app/services/cart';

const Nav = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [state, setState] = useContext(AppContext);

    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setIsLogged(true);
                getItems().then((res) => {
                    setState({items: res, user: user.email});
                })
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