import React from 'react'
import classes from './Auth.module.css'
import { Link } from 'react-router'
const Auth = () => {
  return (
    <><Link className={classes.imgClass}>
      <img src={'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'} alt="" />
    </Link><div className={classes.signIn}>

        <h1> Sign in</h1>

        <div>
          <form>
            <label htmlFor="email" >
              Email:
            </label>
            <input type="email" required placeholder='ruthyeshitila@gmail.com' id="email" />
            <label htmlFor="password" required>
              Password:
            </label>
            <input type="password" required id="password" />
          </form>
        </div>

        <div>
          <button className={classes.btn1}>
            Sign in
          </button>

          <p>
            By signing in, you agree to Amazon clone's Conditions of Use and Privacy Notice and our interet based in the Ads Notice.
          </p>
        </div>
        <div>
          <button className={classes.btn2}>
            Create your Amazon Account
          </button>
        </div>
      </div></>
  )
}

export default Auth;
