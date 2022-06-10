import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
    }


    return (
        <div>
            <Menu />
            <div className='Login'>

                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                    <label>Password:</label>
                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' disabled={!validateForm}>Login</button>
                </form>
                <p>Forgot email ? </p>
                <Link to="/"><strong>Click Here</strong></Link>

            </div>
        </div>
    )
}
