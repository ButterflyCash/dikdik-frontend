import { React } from 'react'
import {Paper, Typography, Grid} from '@mui/material'
import Image from "mui-image";

export default function LeaderItem(props) {
    const id = props.id;
    const stats = props.stats;
    const isAttack = props.isAttack;

    return (
            <Paper elevation={5} key={ id } sx={{ width: '100%', height: 65, mx: 'auto', mt: 1, boxShadow: 3 }}>
                <Grid container alignItems='center' >
                    <Grid item xs={2} sx={{padding: 1}}>
                        {
                            isAttack ?
                            <Image
                                height="50px"
                                width="50px"
                                src={`/images/chunk1.png`}
                                title={`Chunk 1`}
                            />
                            :
                            <Image
                                height="50px"
                                width="50px"
                                src={`/images/dikdik1.jpg`}
                                title={`Dik-Dik 1`}
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
                            <Typography gutterBottom variant="body1" textAlign='right' sx={{pr:2}}>
                                {"..." + stats.owner.substring(25)}
                            </Typography>
                        </Grid>
                        <Grid container>
                            <Grid item xs={3}>
                                <Typography gutterBottom variant="body2">
                                    {
                                        isAttack ?
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
                                        isAttack ?
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
    );
}