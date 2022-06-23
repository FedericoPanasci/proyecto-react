import { createUserWithEmailAndPassword, singInWithEmailAndPassword, singOut } from "firebase/auth";
import { auth } from '../firebase';

export const singUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) =>{
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid),{});
        return user.uid;
    })
}

export const singIn = async (email, password) => {
    const result = await singInWithEmailAndPassword(auth, email, password);
    return result.user.uid;
}

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const logout = async () => await singOut(auth);