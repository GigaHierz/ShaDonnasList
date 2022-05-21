import React from 'react';
import logo from './logo.svg';
//import './assets/css/fonts.css';

import { WalletLinkConnector } from "@web3-react/walletlink-connector";

import { useWeb3React } from '@web3-react/core'





import Navigation from './components/Navigation';
import ProfilePage from './Pages/ProfilePage';
import ProfileCard from './components/ProfileCard';



import './App.css';

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
 });
 

function App() {

  const { activate, deactivate } = useWeb3React();

  return (
    <div className="App">
      <Navigation></Navigation>
      <button onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>


      <ProfilePage></ProfilePage>
    </div>
  );
}

export default App;
