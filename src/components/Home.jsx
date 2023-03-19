import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Image from "mui-image";

export default function Home() {
    const theme = useTheme();

    return (
        <Box sx={{padding: 2}}>
            <Paper elevation={5} sx={{bgcolor:`${theme.palette.info.main}`, color: 'black', padding: 2, maxWidth: 900, margin: 'auto', boxShadow:'inset 0px 0px 10px rgba(0,0,0,0.9)'}}>
                <Typography variant="h3" sx={{overflowWrap: 'break-word', textAlign: 'center', mb: 3}}>
                    Home
                </Typography>
                <Typography variant="h5" sx={{overflowWrap: 'break-word', textAlign: 'center', mb: 3}}>
                    Welcome to the Hardwood Forest. This is a magical place where mythical creatures live and fight to
                    survive. Will you take the side of the resourceful Dik-Diks, cunning ChunkMunkz, or perhaps some
                    other unknown and mysterious creature?
                </Typography>
                <Box display="flex" justifyContent="center" sx={{mb: 3}} >
                    <Image src="/images/home-hero.jpg" height="70%" width="70%" alt="ChunkMunk and Dik-Dik in a magical forest" />
                </Box>
                <Typography variant="h5" sx={{overflowWrap: 'break-word', textAlign: 'center', mb: 3}}>
                    The battle for control of the dangleberry supply is underway, and there aren't enough resources
                    for all creature of the forest to get themselves into battle-ready shape. Learn more about
                    navigating the Hardwood Forest &nbsp;
                    <Link to={{ pathname: "https://dikdikdefense.com" }} target="_blank" rel="_norefferer">here.</Link>
                </Typography>
            </Paper>
        </Box>
    );
}