import logo from './logo.svg';
import React from 'react';
import logoPic from './logoPic.png'
import profileImage from './Ellipse 5.png'

import './App.css';


function App() {
  return (
    <>
    <Header />
    <div style={{display:'flex'}}>
    <Aside />
    <Section />
    </div>
    </>
  );
}

function Header() {
  return (
    <div className='container'>
      <div className='logo'>
        <img src={logoPic} />
      </div>
      <div className='profileSection'>
        <div className='user-profile'>
          <img src={profileImage} />
          <div className='text'>
            <h3>Obinna Festus <i className="fa-solid fa-angle-down"></i></h3>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Aside() {
  return (
    <div className = 'aside'>
      <div className='btnArea'>
        <button className='firstBtn'><i className="fa-solid fa-users"></i> Data Managemant</button>
        <button><i className="fa-solid fa-users-line"></i> Content Managemant System (CMS)</button>
        <button><i className="fa-solid fa-users"></i> User Managemant</button>
      </div>
      <div className='logoutBtn'>
        <button><i className="fa-solid fa-house"></i> Log out</button>
      </div>
    </div>
  )
}


function Section() {
  return (
    <div className='section'>
      <div className='sub-section'></div>
    </div>
  )
}




export default App;
