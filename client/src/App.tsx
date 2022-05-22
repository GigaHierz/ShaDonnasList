import React from 'react';
import { useEffect } from "react"

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
  const { active, chainId, account } = useWeb3React();

  

  //const { active, account, library, connector, activate, deactivate } = useWeb3React()


  useEffect(() => {
    localStorage.clear();


    //function to connect wallet when the page loads
    const connectWalletOnPageLoad = async () => {

      //if wallet is already connected -- then load
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(CoinbaseWallet)
          localStorage.setItem('isWalletConnected', "true")
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    //connectWalletOnPageLoad()
  }, [])


  async function connect() {
    try {
      await activate(CoinbaseWallet) 
      
      //console.log(CoinbaseWallet)
      console.log("connected")
      //localStorage.setItem('isWalletConnected', "true")
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      //localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }


  return (
    <div className="App">
      <Navigation connectwallet={connect} disconnectwallet={disconnect} active={active}></Navigation>
      {/* <button onClick={connect}>Coinbase Wallet</button>
      <button onClick={deactivate}>Disconnect</button>
      <div>{`Connection Status: ${active}`}</div>
      <div>{`Account: ${account}`}</div>
      <div>{`Network ID: ${chainId}`}</div> */}
     



      <ProfilePage></ProfilePage>
    </div>
  );
}

export default App;
