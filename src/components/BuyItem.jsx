import { React, useState } from 'react'
import {Box, Typography, Grid, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../App.css';

export default function BuyItem(props) {
    const cost = props.cost;
    const [itemAmount, setItemAmount] = useState(1);

    const increment = () => {
        if (itemAmount < 10) {
            setItemAmount(itemAmount + 1);
        }
    }

    const decrement = () => {
        if (itemAmount > 1) {
            setItemAmount(itemAmount - 1);
        }
    }

    return (
        <Box>
            <Grid container sx={{mx: 'auto', mt: 1}} alignItems="center">
                <Grid item xs={5}>
                    <RemoveIcon onClick={decrement}/>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body1">
                        {itemAmount}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <AddIcon onClick={increment}/>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        id="buyButton"
                        variant="contained"
                        sx={{mt: 1}}
                        // onClick={() => ()}
                    >
                        Buy &nbsp; <img src={"/images/small-bcash.png"} alt="bCASH logo" /> &nbsp; {cost * itemAmount}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}