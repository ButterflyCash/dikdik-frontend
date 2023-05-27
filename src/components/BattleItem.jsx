import { React } from 'react'
import {Box, Paper, Typography, Grid} from '@mui/material'
import Image from "mui-image";

export default function BattleItem(props) {
    const stats = props.stats;
    const charType = props.charType;

    const moveMapping = {
        "melee": "Melee",
        "magic": "Magic",
        "ranged": "Ranged"
    }

    const imageMapping = {
        "melee": "SWORD",
        "magic": "SPELLBOOK",
        "ranged": "BOW",
        "sword": "SWORD",
        "spellbook": "SPELLBOOK",
        "bow": "BOW",
        "basic melee shield": "MELEE",
        "basic magic shield": "MAGIC",
        "basic ranged shield": "RANGED",
        "basic golden shield": "GOLD",
        "none": "icons/CROSS"
    }

    return (
        <Paper elevation={5} sx={{width: '100%', height: 85, mx: 'auto', mt: 1, boxShadow: 3}}>
            <Grid container alignItems='center'>
                <Grid item xs={2} sx={{padding: 1}}>
                    {
                        (stats.damageDone > 0 && charType === 'chunkz') ||
                        (stats.damageDone === 0 && charType === 'dikdik')    ?
                            <Image
                                height="50px"
                                width="50px"
                                src={'/images/icons/TICK.png'}
                                title={`WIN`}
                            />
                        :
                            <Image
                                height="50px"
                                width="50px"
                                src={'images/icons/CROSS.png'}
                                title={`LOSE`}
                            />
                    }
                </Grid>
                <Grid item xs container direction="column" spacing={2} sx={{ml: 2}}>
                    <Grid item xs={5}>
                        <Typography gutterBottom variant="body1" textAlign='right' sx={{pr: 2}}>
                            {"timestamp: " + stats.timestamp}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                    <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/${imageMapping[stats.attack]}.png`}
                                    title={`${moveMapping[stats.attack]}`}
                                    />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                Att.
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/${imageMapping[stats.attackItem]}.png`}
                                    title={`${stats.attackItem}`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                Item
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/${imageMapping[stats.defense]}.png`}
                                    title={`${moveMapping[stats.defense]}`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                Def.
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/${imageMapping[stats.defenseItem]}.png`}
                                    title={`${stats.defenseItem}`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                Item
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    height="25px"
                                    width="25px"
                                    src={`/images/icons/BAND-AID.png`}
                                    title={`Damage`}
                                />
                            </Box>
                            <Typography gutterBottom variant="body2" textAlign="center">
                                {stats.damageDone}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            {
                                stats.KO ?
                                    <Box>
                                        <Box display="flex" justifyContent="center">
                                            <Image
                                                height="25px"
                                                width="25px"
                                                src={`/images/icons/BAM.png`}
                                                title={`KO`}
                                            />
                                        </Box>
                                        <Typography gutterBottom variant="body2" textAlign="center">
                                            KO
                                        </Typography>
                                    </Box>
                                :
                                    <Box display="flex" justifyContent="center">
                                    </Box>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}