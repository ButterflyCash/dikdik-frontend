import { React, useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { db } from "../utils/firebase";
import {equalTo, onValue, orderByChild, query, ref} from "firebase/database";
import ZoogContainer from "./ZoogContainer";

export default function Forest() {
    const theme = useTheme();
    const [chunkzStats, setChunkzStats] = useState([]);
    const [dikdikStats, setDikdikStats] = useState([]);

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

    return (
        <Box sx={{padding: 2}}>
            <Paper elevation={5} sx={{bgcolor:`${theme.palette.info.main}`, color: 'black', padding: 2, maxWidth: 600, margin: 'auto', boxShadow:'inset 0px 0px 10px rgba(0,0,0,0.9)'}}>
                <Typography variant="h3" sx={{overflowWrap: 'break-word', textAlign: 'center'}}>
                    Hardwood Forest
                </Typography>
                <ZoogContainer chunkz={chunkzStats} dikdiks={dikdikStats}/>
            </Paper>
        </Box>
    );
}