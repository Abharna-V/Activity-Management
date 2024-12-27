import React, { useState, useRef } from 'react';

function Card2() {
  const defaultitem = ['Go for a walk', 'Eat healthy food'];
  const [item, setitem] = useState(defaultitem); 
  const itemInputRef = useRef(null); 
  const handleAdditem = () => {
    const newitem = itemInputRef.current.value;
    if (newitem) {
      setitem([...item, newitem]);
      itemInputRef.current.value = ''; 
    }
  };

  const handleDeleteitem = (index) => {
    const updateditem = item.filter((_, i) => i !== index); 
    setitem(updateditem);
  };

  return (
    <div className='power'>
      <div className='nxt'>
      <h2>Manage Activities</h2>
      <div className='add'>
        <input
          type="text"
          ref={itemInputRef}
          placeholder="Next Activity?"
        />
        <button onClick={handleAdditem}>Add</button>
        </div>
        </div>

      <div className='delete'>
        <h2>Today's Activities</h2>
        {item.length > 0 ? (
          <ul>
            {item.map((item, index) => (
              <li key={index} >
                {index + 1}. {item}
                <button id='right' onClick={() => handleDeleteitem(index)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven't added anything yet</p>
        )}
      </div>
    </div>
  );
}

export default Card2;