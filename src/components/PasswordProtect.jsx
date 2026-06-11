import React, { useState, useEffect } from 'react';
import './PasswordProtect.css';

const PasswordProtect = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // The secret password (client-side, not highly secure but good enough for simple hiding)
  const SECRET_PASSWORD = 'Wibit';

  useEffect(() => {
    // Check if user already entered the password in a previous session
    const authStatus = localStorage.getItem('site_authorized');
    if (authStatus === 'true') {
      setIsAuthorized(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      localStorage.setItem('site_authorized', 'true');
      setIsAuthorized(true);
    } else {
      setError(true);
      setPassword('');
    }
  };

  if (isAuthorized) {
    return children;
  }

  return (
    <div className="password-protect-container">
      <div className="password-protect-box">
        <h2>Privater Bereich</h2>
        <p>Bitte gib das Passwort ein, um den Business Plan anzusehen.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Passwort"
            className={error ? 'error' : ''}
            autoFocus
          />
          {error && <p className="error-message">Falsches Passwort. Bitte erneut versuchen.</p>}
          <button type="submit">Eintreten</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtect;
