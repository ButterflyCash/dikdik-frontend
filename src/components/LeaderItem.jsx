import { React } from 'react'
import {Box, Paper, Typography, Grid} from '@mui/material'
import Image from "mui-image";

export default function LeaderItem(props) {
    const id = props.id;
    const stats = props.stats;
    const type = props.type;
    const contractMapping = {
        "0x544995dc5A744cAfC646517F5ae813C61F023873":"chunkz",
        "0x544995dc5A744cAfC646517F5ae813C61F023874":"dikdik"
    }

    return (
        type === 'attackers' || type === 'defenders' ?
        <Paper elevation={5} key={id} sx={{width: '100%', height: 65, mx: 'auto', mt: 1, boxShadow: 3}}>
            <Grid container alignItems='center'>
                <Grid item xs={2} sx={{padding: 1}}>
                    {
                        <Image
                            height="50px"
                            width="50px"
                            src={`/images/${type === 'defenders' ? 'dikdik' : contractMapping[stats.contract]}/${id}.png`}
                            title={`${contractMapping[stats.contract]} ${id}`}
                        />
                    }
                </Grid>
                <Grid item xs={1} sx={{px: 1}}>
                    <Typography gutterBottom variant="body1" >
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
                            <Typography gutterBottom variant="body2">
                                {
                                    type === 'attackers' ?
                                        "A: " + stats.attacks.toString()
                                        :
                                        "D: " + stats.defenses.toString()
                                }

                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography gutterBottom variant="body2">
                                S: {stats['success']}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography gutterBottom variant="body2">
                                {
                                    type === 'attackers' ?
                                        "D: " + stats.damageDone.toString()
                                        :
                                        "D: " + stats.damageTaken.toString()
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography gutterBottom variant="body2">
                                KO: {stats.KO}
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
                            src={`/images/${contractMapping[stats.contract]}/${id}.png`}
                            title={`${contractMapping[stats.contract]} ${id}`}
                        />
                    }
                </Grid>
                <Grid item xs={1} sx={{px: 1}}>
                    <Typography gutterBottom variant="body1">
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