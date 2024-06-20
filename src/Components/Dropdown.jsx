import React, { useState } from 'react';
import './Dropdown.css';
import * as AiIcons from "react-icons/ai";

function Dropdown({ content }) {
  const [dropmenu, setDropmenu] = useState(false);

  const showdropmenu = () => {
    setDropmenu(!dropmenu);
  }

  return (
    <div className={dropmenu ?'dropmenu open' : 'dropmenu'} onClick={showdropmenu}>
      <div className='menu'>
        <h3>{content}</h3>
        {!dropmenu ? (
          <AiIcons.AiOutlineCaretDown className='icon' />
        ) : (
          <AiIcons.AiOutlineCaretUp className='icon' />
        )}
      </div>
      <ul className={dropmenu ? 'items-menu open' : 'items-menu'}>
        <li>lesson 1</li>
        <li>lesson 2</li>
        <li>lesson 3</li>
      </ul>
    </div>
  );
}

export default Dropdown;
