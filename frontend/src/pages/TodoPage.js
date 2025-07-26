import React, { useState, useEffect } from 'react';

function TodoPage({ logout }) {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();
    setItems(data);
  };

  const addItem = async () => {
    if (!text) return;
    const res = await fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const newItem = await res.json();
    setItems([...items, newItem]);
    setText('');
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/items/${id}`, { method: 'DELETE' });
    setItems(items.filter(i => i.id !== id));
  };

  const saveEdit = async (id) => {
    const res = await fetch(`http://localhost:5000/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: editText }),
    });
    const updated = await res.json();
    setItems(items.map(i => (i.id === id ? updated : i)));
    setEditingId(null);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container">
  <h2>Todo App</h2>
  <input
    value={text}
    onChange={e => setText(e.target.value)}
    placeholder="Add new item"
  />
  <button className="add-btn" onClick={addItem}>Add</button>
  <button className="logout-btn" onClick={logout}>Logout</button>

  <ul>
    {items.map(i => (
      <li key={i.id}>
        <span className="text">
          {editingId === i.id ? (
            <input value={editText} onChange={e => setEditText(e.target.value)} />
          ) : (
            i.text
          )}
        </span>
        {editingId === i.id ? (
          <button className="save-btn" onClick={() => saveEdit(i.id)}>Save</button>
        ) : (
          <button className="edit-btn" onClick={() => {
            setEditingId(i.id);
            setEditText(i.text);
          }}>Edit</button>
        )}
        <button className="delete-btn" onClick={() => deleteItem(i.id)}>X</button>
      </li>
    ))}
  </ul>
</div>

  );
}

export default TodoPage;
