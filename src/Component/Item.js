
export default function Item({ item, deleteOnItem, checkedOnItem }) {
  return (
    <li>
      <input type='checkbox' value={item.packed} onChange={() => checkedOnItem(item.id)}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteOnItem(item.id)}>❌</button>
    </li>
  );
}
