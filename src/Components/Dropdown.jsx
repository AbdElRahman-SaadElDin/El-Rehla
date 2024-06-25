import React, { useState } from 'react';
import './Dropdown.css';
import * as AiIcons from "react-icons/ai";

function Dropdown({ content, items, onSelect }) {
  const [dropmenu, setDropmenu] = useState(false);

  const toggleDropdown = () => {
    setDropmenu(!dropmenu);
  };

  const handleItemClick = (item) => {
    if (onSelect) {
      onSelect(item); // Call the onSelect callback with the selected item
    }
    setDropmenu(false); // Close dropdown after item is selected
  };

  return (
    <div className={dropmenu ? 'dropmenu open' : 'dropmenu'}>
      <div className='menu' onClick={toggleDropdown}>
        <h3>{content}</h3>
        {!dropmenu ? (
          <AiIcons.AiOutlineCaretDown className='icon' />
        ) : (
          <AiIcons.AiOutlineCaretUp className='icon' />
        )}
      </div>
      <ul className={dropmenu ? 'items-menu open' : 'items-menu'}>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
