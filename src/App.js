import { useState } from 'react';



function App() {
  const [item, setItem] = useState([]);

  function handleAddItem(item) {
    setItem((items => [...items, item]));
  }

  function handleDeleteItem(id) {
    setItem(item.filter(items => items.id !== id))
  }

  function handlePackedItem(id) {
    setItem(item.map(items => items.id === id ? { ...items, packed: !items.packed } : items));
  }

  return (
    <>
      <Logo />
      <Form addOnItems={handleAddItem} />
      <PackingList items={item} deleteOnItem={handleDeleteItem} checkedOnItem={handlePackedItem} />
      <Footer />
    </>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ addOnItems }) {
  const [description, setDescription] = useState("");

  const [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, select, packed: false, id: Date.now() };
    console.log(newItem);

    addOnItems(newItem);

    setDescription("");
    setSelect(1);
  }

  /**function handleOnChange(e){
    e.preventDefault();
    setDescription(e.target.value);
  }*/

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={select} onChange={(e) => setSelect(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Enter item ...." />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, deleteOnItem, checkedOnItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} deleteOnItem={deleteOnItem} item={item} checkedOnItem={checkedOnItem} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, deleteOnItem, checkedOnItem }) {
return (
    <li>
      <input type='checkbox' value={item.packed} onChange={() => checkedOnItem(item.id)} ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteOnItem(item.id)}>❌</button>
    </li>
  );
}

function Footer() {
  return (
    <footer>
      <p>You have x items in list and you have packed x (x%)🚀</p>
    </footer>
  );
}

export default App;
