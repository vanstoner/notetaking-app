import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

