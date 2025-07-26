import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      localStorage.setItem('token', 'loggedin');
      onLogin();
    } else {
      alert('Invalid login');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
