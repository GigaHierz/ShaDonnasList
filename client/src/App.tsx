import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import logo from './logo.svg'
//import './assets/css/fonts.css';

import { WalletLinkConnector } from '@web3-react/walletlink-connector'
//import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from '@web3-react/injected-connector'
import { Contract, ethers } from 'ethers'

import web3 from 'Web3'
import { useWeb3React } from '@web3-react/core'
import Membership from './contracts/Membership.sol/Membership.json'

// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// import WalletConnect from "@walletconnect/web3-provider";

// import Web3Modal from "web3modal";

import Navigation from './components/Navigation'
import ProfilePage from './Pages/ProfilePage'
import LandingPage from './Pages/LandingPage'

import ProfileCard from './components/ProfileCard'
import './App.css'

const address = '0xa5f9A25D85591EA98983337BAc94030674949A8E'

const abi = Membership.abi
const provider = ethers.providers.getDefaultProvider('rinkeby')

const contract = new ethers.Contract(address, abi, provider)

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: 'Rate the Block',
  supportedChainIds: [1, 3, 4, 5, 42, 80001]
})

//  const WalletConnect = new WalletConnectConnector({
//   rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true,
//  });

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 80001]
})

//  export const providerOptions = {
//  coinbasewallet: {
//    package: CoinbaseWalletSDK,
//    options: {
//      appName: "Web 3 Modal Demo",
//      infuraId: process.env.INFURA_KEY
//    }
//  },
//  walletconnect: {
//    package: WalletConnect,
//    options: {
//      infuraId: process.env.INFURA_KEY
//    }
//  }
// };

// const web3Modal = new Web3Modal({
//   providerOptions // required
// });

function App () {
  const { activate, deactivate } = useWeb3React()
  const { active, chainId, account } = useWeb3React()

  const [provider, setProvider] = useState()
  const [library, setLibrary] = useState()
  const [page, setPage] = useState('landing')

  //const { active, account, library, connector, activate, deactivate } = useWeb3React()

  useEffect(() => {
    localStorage.clear()

    // const callPromise = contract.getValue()

    // callPromise.then(function (result: any) {
    //   console.log('Positional argument [0]; author:   ' + result[0])
    //   console.log('Positional argument [1]; value:    ' + result[1])
    //   console.log('Keyword argument [author]; author: ' + result.author)
    //   console.log('Keyword argument [value]; value:   ' + result.value)
    // })

    //function to connect wallet when the page loads
    const connectWalletOnPageLoad = async () => {
      //if wallet is already connected -- then load
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(CoinbaseWallet)
          localStorage.setItem('isWalletConnected', 'true')
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    //connectWalletOnPageLoad()
  }, [])

  async function connect (wallet: any) {
    try {
      console.log(wallet)

      if (wallet == 'coinbase') {
        await activate(CoinbaseWallet)
        console.log('cb')
      } else {
        await activate(Injected)
        console.log('mm')
      }

      //console.log(CoinbaseWallet)
      console.log('connected')
      //localStorage.setItem('isWalletConnected', "true")
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect () {
    try {
      deactivate()
      //localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className='App'>
      <Navigation
        connectwallet={connect}
        disconnectwallet={disconnect}
        active={active}
      ></Navigation>
      {/* <button onClick={connect}>Coinbase Wallet</button>
      <button onClick={deactivate}>Disconnect</button>
      <div>{`Connection Status: ${active}`}</div>
      <div>{`Account: ${account}`}</div>
      <div>{`Network ID: ${chainId}`}</div> */}

      {page == 'landing' ? (
        <LandingPage></LandingPage>
      ) : (
        <ProfilePage></ProfilePage>
      )}
    </div>
  )
}

export default App
