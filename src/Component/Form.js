import { useState } from 'react';

export default function Form({ addOnItems }) {
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
