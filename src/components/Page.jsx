import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';

function Page({ username, onLogout }) { 
  return (
    <div className='hellopage'>
      <div className='out'>
        <h1>Hello, {username ? username : ""}!</h1> 
        <p>This is your page where you can manage your activities.</p>
      </div>
      <div className='btn'>
        <button id ='btn' onClick={onLogout}>Logout</button> 
      </div>
      <Card1 />
      <Card2 />
    </div>
  );
}

export default Page;