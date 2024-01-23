// pages/signup.js
import { useState } from 'react';
import styles from './signup.module.css';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    let data = axios.post("http://localhost:8082/user",{
      name:name,
      email:email,
      password:password,
      role:role,
      location:location

    }).then((response) => {
      router.push("/login");
    })
    .catch((error) => {
      console.log("Error while posting data to user API:", error);
    });;
    
  };

  
  return (
    <div className={styles.signupContainer}>
      <h1>Signup</h1>
      <form onSubmit={handleSignup} className={styles.signupForm}>
        <div className={styles.formGroup}>
          <label >Name</label>
          <input type='text' placeholder='Enter your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <div> 
          <label>Role:</label>
          <label>
            <input
              type="radio"
              name="role"
              value="employee"
              checked={role === 'employee'}
              onChange={() => setRole('employee')}
              required
            /> Employee
          </label>
          </div>
          <div>
          <label>
            <input
              type="radio"
              name="role"
              value="manager"
              checked={role === 'manager'}
              onChange={() => setRole('manager')}
              required
            /> Manager
          </label>
          </div>
          <label >Location</label>
          <input type='text' placeholder='Enter your Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <Link href='/login'><p>Already Account? Click here</p></Link>
    </div>
  );
};

export default Signup;
