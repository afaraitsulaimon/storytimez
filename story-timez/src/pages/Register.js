import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Register() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: '',
  });

  const [error, setError] = useState({});
  const [user, setUser] = useState('Reader');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateInfo(values));
    setIsSubmit(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      //[e.target.name]: e.target.value
      [name]: value
    });
  }

  /*
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [error]);

  */
  function validateInfo(values) {
    const error = {};

    if (!values.name.trim()) {
      error.name = "Please enter your name";
    }
    //regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.email) {
      error.email = "Email required"
    } else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { error.email = "Please enter a valid email address"; }

    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 6) {
      error.password = "Password needs to be 6 characters or more";
    }

    if (!values.confirm_password) {
      error.confirm_password = "Password is required";
    } else if (values.confirm_password !== values.password) {
      error.confirm_password = "password do not match";
    }

    if (!values.phone) {
      error.phone = "Enter your phone number";
    } else if (isNaN(values.phone)) {
      error.phone = "Enter a valid phone number";
    }
    return error;
  }

  return (
    <div>


      <div className='register'>
        {Object.keys(error).length === 0 && isSubmit ? <p className='reg'>you've successfully registered</p> : <p></p>}
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label >Name: </label>
            <input
              type="text"
              name='name'
              value={values.name}
              onChange={handleChange}
              placeholder='Enter your name' />
            {error.name && <p>{error.name}</p>}

          </div>

          <div>
            <label >Email: </label>
            <input
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              placeholder='Enter your email' />
            {error.email && <p>{error.email}</p>}
          </div>

          <div>
            <label >Password: </label>
            <input
              type='password'
              name='password'
              placeholder='password'
              value={values.password}
              onChange={handleChange} />
            {error.password && <p>{error.password}</p>}
          </div>

          <div>
            <label >Confirm Password: </label>
            <input
              type='password'
              name='confirm_password'
              placeholder='confirm password'
              value={values.confirm_password}
              onChange={handleChange}
            />
            {error.confirm_password && <p>{error.confirm_password}</p>}
          </div>

          <div>
            <label >Phone: </label>
            <input
              type='text'
              name='phone'
              value={values.phone}
              onChange={handleChange}
            />
            {error.phone && <p>{error.phone}</p>}
          </div>

          <div>

            <label >User:</label>
            <select value={user} onChange={(e) => setUser(e.target.value)}>
              <option value="Reader">Reader</option>
              <option value="Writer">Writer</option>
            </select>

            <div>
              <button type='submit'>Sign Up</button>

            </div>

          </div>

        </form>
        <p>Already have an account? <span><Link to="/Login">Login Here</Link></span></p>
      </div >
    </div>
  )
}
