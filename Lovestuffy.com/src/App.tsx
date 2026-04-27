import React from 'react'

import LoveStuffyImage from './LoveStuffyImage'

function App() {
  return (
  <div id="app">
    <div id="topbar" className="topbar">
      <ul className="toplist">
        <li>
          <LoveStuffyImage width={100}/>
        </li>
        <li>
          <a href="index.html">
            <div className="topbutton" id="homebutton">
              <h2>Home</h2>
            </div>
          </a>
        </li>
        <li>
          <a href="SHOP">
            <div className="topbutton" id="shopbutton">
              <h2>Store</h2>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div id="body" style={{ position: 'fixed', top: 140 }}>
      <div id="Header">
        <h1>LoveStufy.com</h1>
        <h3>Welcome to LoveStufy.com</h3>
        <p>Lovestufy is pronounced Luv-stuff-e</p>
        <LoveStuffyImage width={200}/>
      </div>
      <div id="What is LoveStufy.com?">
        <h2>What is LoveStufy.com?</h2>
        <p>LoveStufy.com is Quilty's little website for his teddy: Lovestufy</p>
      </div>
      <div id="Links">
        <h2>Links</h2>
        <ul>
          <li>
            <a href="Shop">
              <h3>LoveStufy.Store</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default App
