import { React, useState, useEffect } from 'react';
import {Box, Typography, Grid, Card, Button} from '@mui/material';
import Image from "mui-image";

export default function TokenContainer(props) {
    const [balance, setBalance] = useState(0);
    const [approved, setApproved] = useState(0);
    const name = props.name;

    useEffect( () => {
        const fetchData = async () => {
            if (name === "bCASH") {
                setBalance(1000);
                setApproved(250);
            } else {
                setBalance(30);
                setApproved(5);
            }
        }
        fetchData();
    }, [setBalance, setApproved, name]);

    const approveAll = (contract, amount) => {
        console.log(`approve ${contract} - ${amount}`);
        refreshToken(contract);
    }

    const refreshToken = (contract) => {
        console.log(`refresh ${contract}`);
    }

    return (
        <Box>
            {
                <Card key={name} sx={{width: '100%', mt: 1, boxShadow: 3, pt: 1, pb: 1}}>
                    <Grid container display="flex" alignItems="center">
                        <Grid item xs={3}  sx={{pl:1}}>
                            {
                                name === "DANGLE" ?
                                    <Image
                                        height="70px"
                                        width="70px"
                                        src={`/images/icons/DANGLEBERRY.png`}
                                        title="Dangleberries"
                                    />
                                    :
                                    <Image
                                        height="70px"
                                        width="70px"
                                        src={`/images/med-bcash.png`}
                                        title="bCASH"
                                    />
                            }
                        </Grid>
                        <Grid item xs={9}>
                            <Grid container justifyContent="left" alignItems="center">
                                <Grid item xs={12} md={7} sx={{pl:1}}>
                                    <Box display="flex" justifyContent="left">
                                        <Typography variant="body1">
                                            {`Your $${name} balance: ${balance}`}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="left">
                                        <Typography variant="body1">
                                            {`Your $${name} approved: ${approved}`}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={5} sx={{pl:1}}>
                                    <Box display="flex" justifyContent="left">
                                        <Button
                                            id="approveButton"
                                            variant="contained"
                                            sx={{mt: 1}}
                                            onClick={() => approveAll(name, balance)}
                                        >
                                            Approve All &nbsp;
                                            {
                                                name === "DANGLE" ?
                                                    <img
                                                        src={"/images/icons/DANGLEBERRY.png"}
                                                        alt="Dangleberries"
                                                        height="40px"
                                                    />
                                                :
                                                    <img
                                                        src={"/images/med-bcash.png"}
                                                        alt="bCASH"
                                                        height="40px"
                                                    />
                                            }
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            }
        </Box>
    );
}