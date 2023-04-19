import { React } from 'react';
import {Box, Typography, Grid, Card, Button} from '@mui/material';
import Image from "mui-image";

export default function ForestHeader(props) {
    const id = props.id;
    const type = props.type;
    const data = props.stakeData;

    const convertTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        return `${minutes}m:${seconds % 60}s`
    }

    const collect = () => {
        console.log("collect");
    }

    const collectAndRetreat = () => {
        console.log("collect and retreat");
    }

    return (
        <Box>
            {
                type === "dikdik" ?
                    <Card key={id} sx={{width: '100%', mt: 1, boxShadow: 3, pt: 1, pb: 1}}>
                        <Grid container justifyContent="left" alignItems="center">
                            <Grid item xs={3}  sx={{pl:1}}>
                                <Image
                                    height="70px"
                                    width="70px"
                                    src={`/images/icons/SHIELD.png`}
                                    title={`Shield`}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container justifyContent="left" alignItems="center">
                                    <Grid item xs={12} md={7} sx={{pl:1}}>
                                        <Typography variant="body1">
                                            {`Time until next action: ${data.timeLeft > 0 ? convertTime(data.timeLeft) : 'READY'}`}
                                        </Typography>
                                        <Typography variant="body1">
                                            {`Current Defense: ${data.currentDefense ? data.currentDefense : "None"}`}
                                        </Typography>
                                        <Typography variant="body1">
                                            {`Equipped Item: ${data.currentItem ? data.currentItem : "None"}`}
                                        </Typography>
                                        <Button
                                            id="collectAndRetreatButton"
                                            variant="contained"
                                            sx={{mt: 1, width: 160.25}}
                                            onClick={() => collectAndRetreat()}
                                        >
                                            Collect & Retreat
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} md={5} sx={{pl:1}}>
                                        <Typography variant="body1" sx={{mt:1}}>
                                            {`Accrued $DANGLE: ${data.accruedDangle ? data.accruedDangle : 0}`}
                                        </Typography>
                                        <Button
                                            id="collectButton"
                                            variant="contained"
                                            sx={{mt: 1, width: 160.25}}
                                            onClick={() => collect()}
                                        >
                                            Collect &nbsp;
                                            <img
                                                src={"/images/icons/DANGLEBERRY.png"}
                                                alt="Dangleberries"
                                                height="40px"
                                            />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                :
                    <Card key={id} sx={{width: '100%', mt: 1, boxShadow: 3, pt: 1, pb: 1}}>
                        <Grid container justifyContent="left" alignItems="center">
                            <Grid item xs={3} sx={{pl:1}}>
                                <Image
                                    height="70px"
                                    width="70px"
                                    src={`/images/icons/SWORD-SWING.png`}
                                    title={`Sword swinging`}
                                />
                            </Grid>
                            <Grid item xs={9} sx={{pl:1}}>
                                <Typography variant="body1">
                                    {`Time until next action: ${data.timeLeft > 0 ? convertTime(data.timeLeft) : 'READY'}`}
                                </Typography>
                                <Typography variant="body1">
                                    {`Total Forest Defenders: ${data.melee + data.magic + data.ranged}`}
                                </Typography>
                                <Typography variant="body1">
                                    {`Total Equipped Items: ${data.meleeShield + data.magicShield + data.rangedShield + data.goldShield}`}
                                </Typography>
                                <Grid container justifyContent="left">
                                    <Grid item>
                                        <Grid container justifyContent="left">
                                            <Grid item xs={4}>
                                                <Box display="flex" justifyContent="center">
                                                    <Image
                                                        height="40px"
                                                        width="40px"
                                                        src={`/images/SWORD.png`}
                                                        title={`Melee Defenders`}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {data.melee}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box display="flex" justifyContent="center">
                                                    <Image
                                                        height="40px"
                                                        width="40px"
                                                        src={`/images/SPELLBOOK.png`}
                                                        title={`Magic Defenders`}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {data.magic}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box display="flex" justifyContent="center">
                                                    <Image
                                                        height="40px"
                                                        width="40px"
                                                        src={`/images/BOW.png`}
                                                        title={`Ranged Defenders`}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {data.ranged}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container justifyContent="left">
                                            <Grid item xs={3}>
                                                <Box display="flex" justifyContent="left">
                                                    <Image
                                                        height="40px"
                                                        width="40px"
                                                        src={`/images/MELEE.png`}
                                                        title={`Basic Melee Shield`}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {data.meleeShield}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Box display="flex" justifyContent="center">
                                                    <Image
                                                        height="40px"
                                                        width="40px"
                                                        src={`/images/MAGIC.png`}
                                                        title={`Basic Magic Shield`}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {data.magicShield}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Box display="flex" justifyContent="center">
                                                    <Image
                                                        height="40px"
                                                        width="40px"
                                                        src={`/images/RANGED.png`}
                                                        title={`Basic Ranged Shield`}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {data.rangedShield}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Box display="flex" justifyContent="center">
                                                    <Image
                                                        height="40px"
                                                        width="40px"
                                                        src={`/images/GOLD.png`}
                                                        title={`Basic Golden Shield`}
                                                    />
                                                </Box>
                                                <Typography gutterBottom variant="body2" textAlign="center">
                                                    {data.goldShield}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
            }
        </Box>
    );
}