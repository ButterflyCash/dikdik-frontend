import { React, useState } from 'react'
import {Box, Paper, Typography, Grid} from '@mui/material'
import Image from "mui-image";

export default function LeaderItem(props) {
    const [errored, setErrored] = useState(false);
    const id = props.id;
    const stats = props.stats;
    const type = props.type;
    const contractMapping = {
        "0x544995dc5A744cAfC646517F5ae813C61F023873":"chunkz",
        "0x544995dc5A744cAfC646517F5ae813C61F023874":"dikdik"
    }

    const fixError = () => {
        if (!errored) {
            setErrored(true);
        }
    }

    const getImage = () => {
        if (errored) {
            return `/images/${type === 'defenders' ? 'dikdik' : contractMapping[stats.contract]}/unavailable.png`
        }
        return `/images/${type === 'defenders' ? 'dikdik' : contractMapping[stats.contract]}/${id}.png`;
    }

    return (
        type === 'attackers' || type === 'defenders' ?
        <Paper elevation={5} key={id} sx={{width: '100%', height: 85, mx: 'auto', mt: 1, boxShadow: 3}}>
            <Grid container alignItems='center'>
                <Grid item xs={2} sx={{padding: 1}}>
                    {
                        <Image
                            height="50px"
                            width="50px"
                            src={getImage()}
                            onError={fixError}
                            title={`${contractMapping[stats.contract]} ${id}`}
                        />
                    }
                </Grid>
                <Grid item xs={1} sx={{pl: 2}}>
                    <Typography gutterBottom variant="body1" textAlign="center">
                        {id}
                    </Typography>
                </Grid>
                <Grid item xs container direction="column" spacing={2} sx={{ml: 2}}>
                    <Grid item xs={5}>
                        <Typography gutterBottom variant="body1" textAlign='right' sx={{pr: 2}}>
                            {"..." + stats.owner.substring(25)}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box display="flex" justifyContent="center">
                                {
                                    type === 'attackers' ?
                                        <Image
                                        height="25px"
                                        width="25px"
                                        src={`/images/icons/SWORD-SWING.png`}
                                        title={`Total Attacks`}
                                        />
                                    :
                                        <Image
                                            height="25px"
                                            width="25px"
                                            src={`/images/icons/SHIELD-ACTION.png`}
                                            title={`Total Defenses`}
                                        />
                                }
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                {
                                    type === 'attackers' ?
                                        stats.attacks.toString()
                                        :
                                        stats.defenses.toString()
                                }

                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/icons/TICK.png`}
                                    title={`Successful ${type === 'attackers' ? 'attacks' : "defenses"}`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                {stats['success']}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/icons/BAND-AID.png`}
                                    title={`Damage ${type === 'attackers' ? 'done' : "taken"}`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                {
                                    type === 'attackers' ?
                                        stats.damageDone.toString()
                                        :
                                        stats.damageTaken.toString()
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/icons/BAM.png`}
                                    title={`KO`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                {stats.KO}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        :
        <Paper elevation={5} key={id} sx={{width: '100%', height: 85, mx: 'auto', mt: 1, boxShadow: 3}}>
            <Grid container alignItems='center'>
                <Grid item xs={2} sx={{padding: 1}}>
                    {
                        <Image
                            height="50px"
                            width="50px"
                            src={getImage()}
                            onError={fixError}
                            title={`${contractMapping[stats.contract]} ${id}`}
                        />
                    }
                </Grid>
                <Grid item xs={1} sx={{pl: 2}}>
                    <Typography gutterBottom variant="body1">
                        {id}
                    </Typography>
                </Grid>
                <Grid item xs container direction="column" spacing={2} sx={{ml: 1}}>
                    <Grid item xs={5}>
                        <Typography gutterBottom variant="body1" textAlign='right' sx={{pr: 2, position: 'relative', right: 25}}>
                            {"..." + stats.owner.substring(25)}
                        </Typography>
                    </Grid>
                    <Grid container sx={{ml: 1}} spacing={2}>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/totalLevel.png`}
                                    title={`Total Level`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                {stats.level.toString()}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/aggression.png`}
                                    title={`Aggression`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                {stats.aggression.toString()}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/toughness.png`}
                                    title={`Toughness`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                {stats.toughness.toString()}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/smarts.png`}
                                    title={`Smarts`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                {stats.smarts.toString()}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/vitality.png`}
                                    title={`Vitality`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                {stats.vitality.toString()}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}