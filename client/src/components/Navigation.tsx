import React from 'react'
import logo from './logo.png'
import '../styles/navigation.css'

interface NavigationProps {
  connectwallet: (params: any) => any
  disconnectwallet: (params: any) => any
  active: any
}

function Navigation ({
  connectwallet,
  disconnectwallet,
  active
}: NavigationProps) {
  return (
    <div>
      <ul className='nav-list'>
        <img className='logo' src='/logo.jpg' alt='logo'></img>
        <li className='nav-title-item'>
          <a href='#home'>Rate The Block</a>
        </li>
        {/* <li className="nav-list-item"><a href="#home">Home</a></li>
        <li className="nav-list-item"><a href="#news">News</a></li>
        <li className="nav-list-item"><a href="#contact">Contact</a></li> */}
        {!active ? (
          <div>
            <li
              onClick={() => connectwallet('coinbase')}
              className='float-right nav-list-item connect-wallet-button'
            >
              <a href='#about'>Coinbase</a>
            </li>
            <li
              onClick={() => connectwallet('walletconnect')}
              className='float-right nav-list-item connect-wallet-button'
            >
              <a href='#about'>MetaMask </a>
            </li>
            <li className='float-right nav-list-item connect-wallet-button'>
              <a href='https://wallet.testnet.near.org/profile'>Near </a>
            </li>
          </div>
        ) : (
          <li
            onClick={disconnectwallet}
            className='float-right nav-list-item disconnect-wallet-button'
          >
            <a href='#about'>Disconnect Wallet</a>
          </li>
        )}

        {/* <button onClick={connect}>Coinbase Wallet</button> */}
      </ul>
    </div>
  )
}

export default Navigation
