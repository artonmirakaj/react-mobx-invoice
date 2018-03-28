import React from 'react'
import { observer } from 'mobx-react';

const Item = ({ item }) => (
  <li>
    {item.name}: {item.quantity} * {item.price.toFixed(2)} = 
    ${item.total().toFixed(2)}
    
    <button onClick={item.decrement}>-</button>
    <button onClick={item.increment}>+</button>
    <button onClick={item.remove}>remove</button>
  </li>
);

export default observer(Item);