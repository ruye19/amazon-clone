import React, { useContext, useState } from 'react';
import classes from './Auth.module.css';
import { Link, useNavigate } from 'react-router-dom'; // Fix incorrect import
import { auth } from '../../utility/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../components/dataProvider/DataProvider';
import { Type } from '../../utility/action.type';
import { ClipLoader } from 'react-spinners';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 const [loading, setloading] = useState({
  signIn:false,
  signUp:false
})
const navigate = useNavigate();

  const [{ user }, dispatch] = useContext(DataContext);

  const authHandler = async (e, action) => {
    e.preventDefault();
    console.log("Button Clicked:", action); // Now prints "sign in" or "sign up"


    try {
      if (action === "sign in") {
       
        setloading({...loading,signIn:true})
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in:", userInfo);
        dispatch({ type: "SET_USER", user: userInfo.user });

        navigate('/')
       
        setError('');
        setloading({...loading, signIn:false})
      } else {
        setloading({...loading, signUp:true})
        const userInfo = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userInfo);
        dispatch({ type: "SET_USER", user: userInfo.user });

        navigate('/')
        setError('');
        setloading({...loading, signUp:false})
      }

    } catch (err) {
      console.log("Error: ", err.message);
      setError(err.message); 
      setloading({...loading, signUp:false})
      setloading({...loading, signIn:false })
    }
  };

  return (
    <>
      <Link to="/" className={classes.imgClass}>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'} alt="Amazon Logo" />
      </Link>
      <div className={classes.signIn}>
        <h1> Sign in</h1>

        {/* Display error message in UI */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            id="email"
          />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password"
          />

          <button name="sign in" className={classes.btn1} onClick={(e) => authHandler(e, "sign in")}>
          {
            loading.signIn ? (<ClipLoader color='white' size={15}></ClipLoader>) : (' Sign in ')
          }
           
          </button>

          <p>
            By signing in, you agree to Amazon clone's Conditions of Use and Privacy Notice and our internet-based Ads Notice.
          </p>

          <button name="sign up" className={classes.btn2} onClick={(e) => authHandler(e, "sign up")}>
          {
            loading.signUp ? (<ClipLoader color='white' size={15}></ClipLoader>) : (' Create your Amazon Account ')
          }
    
          </button>
        </form>
      </div>
     
    </>
  );
};

export default Auth;
