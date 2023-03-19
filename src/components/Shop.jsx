import { React, useState} from 'react'
import {Box, Divider, Paper, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import shopItems from "../utils/items.json";
import ItemContainer from "./ItemContainer";

export default function Shop() {
    const [items] = useState(shopItems)
    const theme = useTheme();

    return (
        <Box sx={{padding: 2}}>
            <Paper elevation={5} sx={{bgcolor:`${theme.palette.info.main}`, color: 'black', padding: 2, maxWidth: 900, margin: 'auto', boxShadow:'inset 0px 0px 10px rgba(0,0,0,0.9)'}}>
                <Typography variant="h3" sx={{overflowWrap: 'break-word', textAlign: 'center'}}>
                    Battle Item Shop
                </Typography>
                <Box sx={{p: 1}}>
                    <Typography variant="h5" sx={{overflowWrap: 'break-word', textAlign: 'left'}}>
                        Attack Items
                    </Typography>
                    <Divider/>
                    <ItemContainer
                        items={ items["attack-items"] }
                    />
                    <Typography variant="h5" sx={{overflowWrap: 'break-word', textAlign: 'left', mt: 3}}>
                        Defense Items
                    </Typography>
                    <Divider/>
                    <ItemContainer
                        items={ items["defense-items"] }
                    />
                </Box>
            </Paper>
        </Box>
    );
}