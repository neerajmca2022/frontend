// components/Login.js
import { useState } from 'react';
// import { signIn } from 'next-auth/react';
import styles from './login.module.css';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Add form validation if needed

    await signIn('credentials', {
      email,
      password,
      redirect: false, // Set to true if you want to redirect after a successful login
    });
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.heading}>Login Page</h1>
      <form className={styles.loginForm} onSubmit={handleSignIn}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Sign in
        </button>
      </form>
     <Link href="/signup"> <p>Click for SignUp</p></Link>
    </div>
  );
};

export default Login;
