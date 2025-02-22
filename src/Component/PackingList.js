import { useState } from 'react';
import  Item  from './Item';

export default function PackingList({ items, deleteOnItem, checkedOnItem, clearItemList }) {
  const [sortedBy, setSortedBy] = useState('item');
  let sortedItems;
  if (sortedBy === 'item') sortedItems = items;
  if (sortedBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === 'packing') sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} deleteOnItem={deleteOnItem} item={item} checkedOnItem={checkedOnItem} />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="item">Sorted by item</option>
          <option value="description">Sorted by description</option>
          <option value="packing">Sorted by packing</option>
        </select>
        <button onClick={clearItemList}>Clear List</button>
      </div>
    </div>
  );
}
