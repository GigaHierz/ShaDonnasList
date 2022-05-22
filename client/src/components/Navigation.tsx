import React from 'react';
import logo from './logo.svg';
import '../styles/navigation.css'

interface NavigationProps {
  connectwallet: (params: any) => any;
  disconnectwallet: (params: any) => any;
  active: any;
}

function Navigation({connectwallet, disconnectwallet, active}:NavigationProps) {
  return (
    <div >
      <ul className="nav-list">
      <li className="nav-title-item"><a href="#home">ShaDonna's List</a></li>
        {/* <li className="nav-list-item"><a href="#home">Home</a></li>
        <li className="nav-list-item"><a href="#news">News</a></li>
        <li className="nav-list-item"><a href="#contact">Contact</a></li> */}
        {!active? 
        <div>
          
        <li onClick={()=>connectwallet("coinbase")} className="float-right nav-list-item connect-wallet-button"><a href="#about">Connect Coinbase Wallet</a></li>
        <li onClick={()=>connectwallet("walletconnect")} className="float-right nav-list-item connect-wallet-button"><a href="#about">Connect Metamask Wallet</a></li>

        </div>:
        <li onClick={disconnectwallet} className="float-right nav-list-item disconnect-wallet-button"><a href="#about">Disconnect Waller</a></li>
        }

        {/* <button onClick={connect}>Coinbase Wallet</button> */}
      </ul>
    </div>
  );
}

export default Navigation;