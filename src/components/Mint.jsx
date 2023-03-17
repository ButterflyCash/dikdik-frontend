import * as React from 'react';
import {Box, Button, Fab, Grid, Input, Paper, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from "mui-image";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Mint() {
    const [mintAmount, setMintAmount] = useState();
    const theme = useTheme();

    return (
        <Box sx={{padding: 2}}>
            <Paper elevation={5} sx={{bgcolor:`${theme.palette.info.main}`, color: 'black', padding: 2, maxWidth: 600, margin: 'auto', boxShadow:'inset 0px 0px 10px rgba(0,0,0,0.9)'}}>
                <Typography variant="h3" sx={{overflowWrap: 'break-word', textAlign: 'center', mb: 3}}>
                    Mint a Dik-Dik
                </Typography>
                <Box display="flex" justifyContent="center" sx={{mb: 3}} >
                    <Image src="/images/dikdikgif.gif" height="70%" width="70%" alt="Dik-Dik Teaser Images" />
                </Box>
                <Typography variant="h5" sx={{overflowWrap: 'break-word', textAlign: 'center', mb: 2}}>
                    To mint a Dik-Dik you will need AVAX and bCASH. Minting will use Chainlink VRF to assign stats
                    that will be used to defend against attackers in the Hardwood Forest.
                </Typography>
                <Box display="flex" justifyContent="center" sx={{mb: 1}} >
                    <Input
                        type="number"
                        value={mintAmount}
                        placeholder="Enter Amount"
                        onChange={e => {e.target.value > 0 ? setMintAmount(Number(e.target.value)) : setMintAmount(0)}}
                        inputProps={{style: { textAlign: 'center', backgroundColor: 'whitesmoke', borderRadius: '10px' }}}
                        disableUnderline={true}
                    ></Input>
                </Box>
                <Box display="flex" justifyContent="center" sx={{mb: 1}} >
                    <Button
                        id="mintButton"
                        variant="contained"
                        sx={{ minWidth: 100, height: 30}}
                        // onClick={() => (wallet ? disconnect(wallet) : connect())}
                    >
                        {/*{connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}*/}
                        Approve & Mint
                    </Button>
                </Box>
                <Typography variant="h5" sx={{overflowWrap: 'break-word', textAlign: 'center', mb: 1}}>
                    Price: 0.5 AVAX + 2000 bCASH
                </Typography>
            </Paper>
        </Box>
    );
}