import { React, useState } from 'react';
import {Box, Typography, Grid, Card, Button} from '@mui/material';
import Image from "mui-image";

export default function AttackContainer(props) {
    const [attack, setAttack] = useState(1);
    const [item, setItem] = useState(0);
    const items = props.items;
    const itemNames = {
        1: 'Basic Sword',
        2: 'Basic Spellbook',
        3: 'Basic Bow'
    }

    const submitAttack = () => {
        console.log(`attack ${attack} with ${item > 0 ? itemNames[item] + '.' : 'no item.'}`);
    }

    const isSelectedItem = (itemId) => {
        if (item === itemId) {
            return "radial-gradient(circle, rgba(83,141,206,1) 50%, white 65%)";
        } else {
            return "white";
        }
    }

    const isSelectedAttack = (attackId) => {
        if (attack === attackId) {
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
                                    Select Attack
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="center" onClick={() => setAttack(1)}>
                                            <Image
                                                height="75px"
                                                width="75px"
                                                fit="contain"
                                                src={`/images/SWORD.png`}
                                                title={`Melee`}
                                                style={{"background": `${isSelectedAttack(1)}`}}
                                            />
                                        </Box>
                                        <Typography gutterBottom variant="body2" textAlign="center">
                                            Melee
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="center" onClick={() => setAttack(2)}>
                                            <Image
                                                height="75px"
                                                width="75px"
                                                fit="contain"
                                                src={`/images/SPELLBOOK.png`}
                                                title={`Magic`}
                                                style={{"background": `${isSelectedAttack(2)}`}}
                                            />
                                        </Box>
                                        <Typography gutterBottom variant="body2" textAlign="center">
                                            Magic
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="center" onClick={() => setAttack(3)}>
                                            <Image
                                                height="75px"
                                                width="75px"
                                                fit="contain"
                                                src={`/images/BOW.png`}
                                                title={`Ranged`}
                                                style={{"background": `${isSelectedAttack(3)}`}}
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
                                            <Grid item xs={2}>
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
                                                        src={`/images/SWORD.png`}
                                                        title={`Basic Sword`}
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
                                                        src={`/images/SPELLBOOK.png`}
                                                        title={`Basic Spellbook`}
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
                                                        src={`/images/BOW.png`}
                                                        title={`Basic Bow`}
                                                        style={{"background": `${isSelectedItem(3)}`}}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {items[2]}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Box display="flex" justifyContent="center">
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={5} sx={{pl:1}}>
                                    <Box display="flex" justifyContent="center">
                                        <Button
                                            id="attackButton"
                                            variant="contained"
                                            sx={{mt: 1}}
                                            onClick={() => submitAttack()}
                                        >
                                            &nbsp; &nbsp; Attack &nbsp; &nbsp;
                                            <img
                                                src={"/images/icons/SWORD-SWING.png"}
                                                alt="Sword"
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