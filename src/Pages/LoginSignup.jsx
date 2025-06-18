import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../CSS/LoginSignup.css';
import { useEffect } from 'react';
// Simulated user list with fake JWTs
const users = [
  { username: "nikhi", password: "12345", token: "203319e7ebd5bc0b137d5f455712376a0aacd0558491c50a3ad6ab293f3ec9f4" },
  { username: "admin", password: "admin123", token: "fake-jwt-token-2" },
];

const LoginSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
  const jwtToken = Cookies.get('jwt_token');
  if (jwtToken !== undefined) {
    navigate('/hero'); 
  }
}, [navigate]);
  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    navigate('/basic', { replace: true });
  };

  const onSubmitFailure = message => {
    setErrorMsg(message);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const matchedUser = users.find(
      user => user.username === username && user.password === password
    );

    if (matchedUser) {
      onSubmitSuccess(matchedUser.token);
    } else {
      onSubmitFailure("Invalid username or password");
    }
  };

  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={submitForm}>
        <div className="input-container">
          <label className="input-label" htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        {errorMsg && <p className="error-message">*{errorMsg}</p>}
      </form>
    </div>
  );
};

export default LoginSignup;