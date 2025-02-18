import { useState } from 'react';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <>
      {" "}
      <Logo />
      <Form />
      <PackingList />
      <Footer />
    </>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
	const [description , setDescription] = useState("");

	const [select , setSelect] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();	
		if(!description) return;
		const newItem = {description,select,packed:false,id:Date.now()};
		console.log(newItem);

		setDescription("");
        setSelect(1);
	}

	// function handleOnChange(e){
	// 	e.preventDefault();
	// 	setDescription(e.target.value);
	// }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={select} onChange={(e)=> setSelect(Number(e.target.value))}>
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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
