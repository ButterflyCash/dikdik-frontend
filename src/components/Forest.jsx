import * as React from 'react';
import { Box, Button, Fab, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Forest() {
    const theme = useTheme();

    return (
        <Box sx={{padding: 2}}>
            <Paper elevation={5} sx={{bgcolor:`${theme.palette.info.main}`, color: 'black', padding: 2, maxWidth: 600, margin: 'auto', boxShadow:'inset 0px 0px 10px rgba(0,0,0,0.9)'}}>
                <Typography variant="h3" sx={{overflowWrap: 'break-word', textAlign: 'center'}}>
                    Hardwood Forest
                </Typography>
            </Paper>
        </Box>
    );
}