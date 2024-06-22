import React, { useState } from 'react';
import './Dropdown.css';
import * as AiIcons from "react-icons/ai";

function Dropdown({ content, items }) {
  const [dropmenu, setDropmenu] = useState(false);

  const showdropmenu = () => {
    setDropmenu(!dropmenu);
  }

  return (
    <div className={dropmenu ? 'dropmenu open' : 'dropmenu'} onClick={showdropmenu}>
      <div className='menu'>
        <h3>{content}</h3>
        {!dropmenu ? (
          <AiIcons.AiOutlineCaretDown className='icon' />
        ) : (
          <AiIcons.AiOutlineCaretUp className='icon' />
        )}
      </div>
      <ul className={dropmenu ? 'items-menu open' : 'items-menu'}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
