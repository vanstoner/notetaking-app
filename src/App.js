import React, { useState } from 'react';
import Login from './components/Login';
import NotesDashboard from './components/NotesDashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser({ username }); // In a real app, authenticate against a backend
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <NotesDashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;

