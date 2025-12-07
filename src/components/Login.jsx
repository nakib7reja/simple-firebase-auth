import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init'

const googleProvider = new GoogleAuthProvider()

const Login = () => {
    const [user, setUser] = useState(null)
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleSingOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sing out done')
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h2>Please Login</h2>
            {/* <button onClick={handleGoogleSignIn} className='btn'>Sign in with Google</button>
            <button onClick={handleSingOut} className='btn'>Sign Out</button> */}
            {user ?
                <button onClick={handleSingOut} className='btn'>Sign Out</button> :
                <button onClick={handleGoogleSignIn} className='btn'>Sign in with Google</button>
            }
            {user &&
                <div>
                    <h3>{user.displayName}</h3>
                </div>
            }
        </div>
    );
};

export default Login;