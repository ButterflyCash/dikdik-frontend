import { React, useState } from 'react';
import {Box, Typography, Grid, Card, Button} from '@mui/material';
import Image from "mui-image";

export default function DefendContainer(props) {
    const [defense, setDefense] = useState(1);
    const [item, setItem] = useState(0);
    const items = props.items;
    const itemNames = {
        1: 'Basic Melee Shield',
        2: 'Basic Magic Shield',
        3: 'Basic Ranged Shield',
        4: 'Basic Golden Shield'
    }

    const defend = () => {
        console.log(`defend ${defense} with ${item > 0 ? itemNames[item] + '.' : 'no item.'}`);
    }

    const isSelectedItem = (itemId) => {
        if (item === itemId) {
            return "radial-gradient(circle, rgba(83,141,206,1) 50%, white 65%)";
        } else {
            return "white";
        }
    }

    const isSelectedDefense = (defenseId) => {
        if (defense === defenseId) {
            return "radial-gradient(circle, rgba(83,141,206,1) 50%, white 65%)";
        } else {
            return "white";
        }
    }

    return (
        <Box>
            {
                <Card sx={{width: '100%', mt: 1, boxShadow: 3, pt: 1, pb: 1}}>
                    <Grid container display="flex" alignItems="center">
                        <Grid item xs={12} md={3}  sx={{pl:1}}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="body1">
                                    Select Defense
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="center" onClick={() => setDefense(1)}>
                                            <Image
                                                height="75px"
                                                width="75px"
                                                fit="contain"
                                                src={`/images/SWORD.png`}
                                                title={`Melee`}
                                                style={{"background": `${isSelectedDefense(1)}`}}
                                            />
                                        </Box>
                                        <Typography gutterBottom variant="body2" textAlign="center">
                                            Melee
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="center" onClick={() => setDefense(2)}>
                                            <Image
                                                height="75px"
                                                width="75px"
                                                fit="contain"
                                                src={`/images/SPELLBOOK.png`}
                                                title={`Magic`}
                                                style={{"background": `${isSelectedDefense(2)}`}}
                                            />
                                        </Box>
                                        <Typography gutterBottom variant="body2" textAlign="center">
                                            Magic
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="center" onClick={() => setDefense(3)}>
                                            <Image
                                                height="75px"
                                                width="75px"
                                                fit="contain"
                                                src={`/images/BOW.png`}
                                                title={`Ranged`}
                                                style={{"background": `${isSelectedDefense(3)}`}}
                                            />
                                        </Box>
                                        <Typography gutterBottom variant="body2" textAlign="center">
                                            Ranged
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Grid container justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={7} sx={{pl:1}}>
                                    <Box display="flex" justifyContent="center">
                                        <Typography variant="body1">
                                            Select Item
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="center">
                                        <Grid container>
                                            <Grid item xs={1}>
                                                <Box display="flex" justifyContent="center">
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Box display="flex" justifyContent="center" onClick={() => setItem(0)}>
                                                    <Image
                                                        height="75px"
                                                        width="75px"
                                                        fit="contain"
                                                        src={`/images/icons/CROSS.png`}
                                                        title={`None`}
                                                        style={{"background": `${isSelectedItem(0)}`}}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    Avail:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Box display="flex" justifyContent="center" onClick={() => setItem(1)}>
                                                    <Image
                                                        height="75px"
                                                        width="75px"
                                                        fit="contain"
                                                        src={`/images/MELEE.png`}
                                                        title={`Basic Melee Shield`}
                                                        style={{"background": `${isSelectedItem(1)}`}}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {items[0]}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Box display="flex" justifyContent="center" onClick={() => setItem(2)}>
                                                    <Image
                                                        height="75px"
                                                        width="75px"
                                                        fit="contain"
                                                        src={`/images/MAGIC.png`}
                                                        title={`Basic Magic Shield`}
                                                        style={{"background": `${isSelectedItem(2)}`}}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {items[1]}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Box display="flex" justifyContent="center" onClick={() => setItem(3)}>
                                                    <Image
                                                        height="75px"
                                                        width="75px"
                                                        fit="contain"
                                                        src={`/images/RANGED.png`}
                                                        title={`Basic Ranged Shield`}
                                                        style={{"background": `${isSelectedItem(3)}`}}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {items[2]}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Box display="flex" justifyContent="center" onClick={() => setItem(4)}>
                                                    <Image
                                                        height="75px"
                                                        width="75px"
                                                        fit="contain"
                                                        src={`/images/GOLD.png`}
                                                        title={`Basic Golden Shield`}
                                                        style={{"background": `${isSelectedItem(4)}`}}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {items[3]}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <Box display="flex" justifyContent="center">
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={5} sx={{pl:1}}>
                                    <Box display="flex" justifyContent="center">
                                        <Button
                                            id="defendButton"
                                            variant="contained"
                                            sx={{mt: 1}}
                                            onClick={() => defend()}
                                        >
                                            Set Defense &nbsp;
                                            <img
                                                src={"/images/icons/SHIELD-ACTION.png"}
                                                alt="Shield"
                                                height="40px"
                                            />
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