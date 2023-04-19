import { React, useEffect, useState } from 'react';
import {Box, Grid, Paper, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { db } from "../utils/firebase";
import {equalTo, onValue, orderByChild, query, ref} from "firebase/database";
import ZoogContainer from "./ZoogContainer";
import ForestHeader from "./ForestHeader";
import TokenContainer from "./TokenContainer";

export default function Forest() {
    const theme = useTheme();
    const [chunkzStats, setChunkzStats] = useState([]);
    const [dikdikStats, setDikdikStats] = useState([]);
    const [character, setCharacter] = useState({"type":"dikdik","index":0});

    useEffect( () => {
        const setStats = async (collection, setter) => {
            const dbRef = ref(db,`stats/${collection}`)
            const q = query(dbRef, ...[orderByChild("owner"), equalTo("0xc03B9483B53c5b000Fa073D3C4549E0aEE6e2E00")]);

            return onValue(q, (snapshot) => {
                const data = snapshot.val();

                if (snapshot.exists()) {
                    const stats = []

                    Object.keys(data).forEach(item => {
                        data[item].id = item;
                        data[item].level = getLevel(data[item]);
                        stats.push(data[item]);
                    })
                    setter(stats)
                }
            });
        }

        const fetchData = async () => {
            await setStats("0x544995dc5A744cAfC646517F5ae813C61F023873", setChunkzStats);
            await setStats("0x544995dc5A744cAfC646517F5ae813C61F023874", setDikdikStats);
        }
        fetchData();
    }, [setChunkzStats, setDikdikStats]);

    const getLevel = (i) => {
        return i.aggression + i.toughness + i.smarts + i.vitality;
    }

    const setChar = (type, idx) => {
        if (type === "chunkz") {
            if (chunkzStats.length > 0) {
                setCharacter({
                    "type": type,
                    "index": idx
                });
            }
        } else {
            if (dikdikStats.length > 0) {
                setCharacter({
                    "type": type,
                    "index": idx
                });
            }
        }

    }

    const getId = () => {
        if (chunkzStats.length > 0 && character.type === "chunkz") {
            return chunkzStats[character.index].id;
        } else if (dikdikStats.length > 0) {
            return dikdikStats[character.index].id;
        } else {
            return 0;
        }
    }

    return (
        <Box sx={{padding: 2}}>
            <Paper elevation={5} sx={{bgcolor:`${theme.palette.info.main}`, color: 'black', padding: 2, maxWidth: 900, margin: 'auto', boxShadow:'inset 0px 0px 10px rgba(0,0,0,0.9)'}}>
                <Typography variant="h3" sx={{overflowWrap: 'break-word', textAlign: 'center'}}>
                    Hardwood Forest
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={5} md={4}>
                        <ZoogContainer chunkz={chunkzStats} dikdiks={dikdikStats} setChar={setChar} />
                    </Grid>
                    <Grid item xs={12} sm={7} md={8}>
                        <Grid container justifyContent="center">
                            <Grid item xs={12}>
                                <ForestHeader
                                    key={character.id}
                                    type={character.type}
                                    id={getId()}
                                    stakeData={
                                        {
                                            "timeLeft": 500,
                                            "currentDefense": null,
                                            "currentItem": null,
                                            "currentHP": 10,
                                            "accruedDangle": 1,
                                            "melee": 5,
                                            "magic": 2,
                                            "ranged": 4,
                                            "meleeShield": 2,
                                            "magicShield": 1,
                                            "rangedShield": 0,
                                            "goldShield": 5
                                        }
                                    }
                                />
                                {
                                    character.type === "dikdik" ?
                                        <TokenContainer
                                            name="DANGLE"
                                        />
                                    :
                                        <TokenContainer
                                            name="bCASH"
                                        />
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}