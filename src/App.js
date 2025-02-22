import { useState } from 'react';
import  Logo  from './Component/Logo';
import  Form  from './Component/Form';
import  PackingList  from './Component/PackingList';
import  Stats  from './Component/Stats';



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

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItem([]);
  }

  return (
    <>
      <Logo />
      <Form addOnItems={handleAddItem} />
      <PackingList items={item} deleteOnItem={handleDeleteItem} checkedOnItem={handlePackedItem} clearItemList={handleClearList}/>

      <Stats items={item} />
    </>
  );
}

export default App;
