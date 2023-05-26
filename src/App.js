import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([{ id: 1, item: '', done: false }]);
  const [item, setItem] = useState('');

  function Add() {
    const newObj = { id: 2, item: item, done: false };
    setList((prevList) => prevList.concat(newObj));
    setItem('');
  }

  function Update(id) {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  }

  return (
    <div className="App">
      <div id="headerWeb">
        <h1>Apa rencanamu hari ini ?</h1>
      </div>
      <div id="inputItem">
        <input
          type="text"
          placeholder="Masukan kegiatan"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <button id="addBtn" onClick={Add}>
          Add
        </button>
      </div>
      <div id="itemList">
        <ul>
          {list.map((l, i) => (
            <li
              key={l.id}
              onClick={() => Update(l.id)}
              className={l.done ? 'done' : ''}
            >
              <span>{l.item}</span>
              <span>X</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
