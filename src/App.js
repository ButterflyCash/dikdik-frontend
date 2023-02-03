import React from 'react'
import './App.css';
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'
import { AppBar, Box, Button, Toolbar } from '@mui/material';

const injected = injectedModule()

const rpcUrl = `https://api.avax.network/ext/bc/C/rpc`

// initialize Onboard
init({
  wallets: [injected],
  chains: [
    {
      id: '0xa86a',
      token: 'AVAX',
      label: 'Avalanche Mainnet',
      rpcUrl
    }
  ]
})

function App() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  // create an ethers provider
  let ethersProvider, signer;

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any');
    signer = ethersProvider.getSigner();
  }

  return (
    <div className="App">
      <AppBar position="static" sx={{ px: 2 }} color="success">
        <Toolbar disableGutters sx={{display: "flex", justifyContent: "flex-end"}}>
            <Button disabled={connecting} variant="contained" sx={{ minWidth: 140, maxWidth: 200 }} onClick={() => (wallet ? disconnect(wallet) : connect())}>
              {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
