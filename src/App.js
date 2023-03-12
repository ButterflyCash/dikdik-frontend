import { React, useState, useEffect } from 'react'
import './App.css';
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'
import { AppBar, Box, Grid, Button, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DikDikMenu from "./components/DikDikMenu";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from "mui-image";
import Mint from "./components/Mint";
import desktopImg from "./bg.png";
import mobileImg from "./bg-small.png";
import Shop from "./components/Shop";
import Forest from "./components/Forest";
import Leaderboard from "./components/Leaderboard";
import Home from "./components/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: '#007451',
    },
    secondary: {
      main: '#2E7D32',
    },
    info: {
      main: '#FFF7BC',
    },
    warning: {
      main: '#FFAD06',
    },
    action: {
      disabledBackground: '#736b6b',
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          '&[role="menu"]': {
            backgroundColor: '#fff',
          },
        },
      },
    },
  },
});

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

  const [bgImage, setBgImage] = useState(window.innerWidth >= 650 ? desktopImg : mobileImg)

  // create an ethers provider
  let ethersProvider, signer;

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any');
    signer = ethersProvider.getSigner();
  }

  useEffect(() => {
    function handleResize() {
      setBgImage(window.innerWidth >= 650 ? desktopImg : mobileImg);
    }

    window.addEventListener('resize', handleResize)
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <AppBar position="static" sx={{ px: 2, width: '100%' }} color="secondary">
            <Toolbar disableGutters sx={{display: "flex"}}>
              <Grid container sx={{padding: 0}} alignItems="center">
                <Grid item xs={1} sm={1} lg={1} display="flex">
                  <DikDikMenu/>
                </Grid>
                <Grid item xs={9} sm={9} lg={9} display="flex" sx={{ px: 1 }}>
                  {/*<Image
                      src="/images/logo.png"
                      heightalt="BattleWrapper Logo"
                      fit="scale-down"
                      sx={{ maxHeight: 100}}
                  />*/}
                  Dik-Dik Defense
                </Grid>
                <Grid item xs={2} display="flex" justifyContent="center" sx={{ pr: 3 }}>
                  <Button
                      id="connectButton"
                      variant="contained"
                      sx={{ minWidth: 100, height: 30}}
                      onClick={() => (wallet ? disconnect(wallet) : connect())}
                  >
                    {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Box
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                height: '100vh'
              }}
          >
          <Switch>
            <Route path="/mint">
              <Mint/>
            </Route>
            <Route path="/shop">
              <Shop/>
            </Route>
            <Route path="/forest">
              <Forest/>
            </Route>
            <Route path="/leaderboard">
              <Leaderboard/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
          </Box>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
