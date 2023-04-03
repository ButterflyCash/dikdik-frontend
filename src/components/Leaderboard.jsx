import { React, useEffect, useState } from 'react';
import { Box, Paper, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { db } from "../utils/firebase";
import { onValue, ref } from "firebase/database";
import LeaderItem from "./LeaderItem";

export default function Leaderboard() {
    const theme = useTheme();

    const [attackers, setAttackers] = useState([]);
    const [defenders, setDefenders] = useState([]);
    const [stats, setStats] = useState([]);
    const [board, setBoard] = useState('attackers');

    const getAttackers = async () => {
        const query = ref(db, "attackers");

        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                let sortedData = Object.entries(data).sort(
                    (p1, p2) => p2[1].success === p1[1].success ? p2[1].KO - p1[1].KO : p2[1].success - p1[1].success);
                setAttackers(sortedData)
            }
        });
    }

    const getDefenders = async () => {
        const query = ref(db, "defenders");

        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                let sortedData = Object.entries(data).sort(
                    (p1, p2) => p2[1].success === p1[1].success ? p1[1].KO - p2[1].KO : p2[1].success - p1[1].success);
                setDefenders(sortedData)
            }
        });
    }

    const getStats = async () => {
        const query = ref(db, "stats");

        return onValue(query, (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {
                const mergedData = []

                Object.keys(data["0x544995dc5A744cAfC646517F5ae813C61F023873"]).forEach(item => {
                    data["0x544995dc5A744cAfC646517F5ae813C61F023873"][item].contract = "0x544995dc5A744cAfC646517F5ae813C61F023873";
                    data["0x544995dc5A744cAfC646517F5ae813C61F023873"][item].id = item;
                    data["0x544995dc5A744cAfC646517F5ae813C61F023873"][item].level = getLevel(data["0x544995dc5A744cAfC646517F5ae813C61F023873"][item]);
                    mergedData.push(data["0x544995dc5A744cAfC646517F5ae813C61F023873"][item]);
                })
                Object.keys(data["0x544995dc5A744cAfC646517F5ae813C61F023874"]).forEach(item => {
                    data["0x544995dc5A744cAfC646517F5ae813C61F023874"][item].contract = "0x544995dc5A744cAfC646517F5ae813C61F023874";
                    data["0x544995dc5A744cAfC646517F5ae813C61F023874"][item].id = item;
                    data["0x544995dc5A744cAfC646517F5ae813C61F023874"][item].level = getLevel(data["0x544995dc5A744cAfC646517F5ae813C61F023874"][item]);
                    mergedData.push(data["0x544995dc5A744cAfC646517F5ae813C61F023874"][item]);
                })
                let sortedData = mergedData.sort(
                    (p1, p2) => p2.level === p1.level ? p2.aggression - p1.aggression : p2.level - p1.level);
                setStats(sortedData)
            }
        });
    }

    const getLevel = (i) => {
        return i.aggression + i.toughness + i.smarts + i.vitality;
    }

    const getHeader = () => {
        if (board === 'attackers') {
            return "ID - # Attacks - # Success - Damage - KOs"
        } else if (board === 'defenders') {
            return "ID - # Defenses - # Success - Damage - KOs"
        }
        return "ID - Level - Agg. - Tough. - Smrt. - Vit."
    }

    const getDataArray = () => {
        if (board === 'attackers') {
            return attackers;
        } else if (board === 'defenders') {
            return defenders;
        }
        return stats;
    }

    const handleChange = (event, newBoard) => {
        setBoard(newBoard);
    };

    useEffect(() => {
        getAttackers();
        getDefenders();
        getStats();
    }, []);

    return (
        <Box sx={{padding: 2}}>
            <Paper elevation={5} sx={{bgcolor:`${theme.palette.info.main}`, color: 'black', padding: 2, maxWidth: 600, margin: 'auto', boxShadow:'inset 0px 0px 10px rgba(0,0,0,0.9)'}}>
                <Typography variant="h3" sx={{overflowWrap: 'break-word', textAlign: 'center'}}>
                    Leaderboard
                </Typography>
                <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                    <ToggleButtonGroup
                        color="primary"
                        value={board}
                        exclusive
                        onChange={handleChange}
                        aria-label="Board"
                    >
                        <ToggleButton value="stats">Stats</ToggleButton>
                        <ToggleButton value="attackers">Attackers</ToggleButton>
                        <ToggleButton value="defenders">Defenders</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <Typography variant="body1" sx={{textAlign: 'center', mt: 1}}>
                    {
                        getHeader()
                    }
                </Typography>
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', width: '100%' }}>
                    {
                        board === 'stats' ?
                            getDataArray().map((item, index) => (
                                <LeaderItem key={index} stats={item} id={item.id} type={board}>
                                </LeaderItem>
                            ))
                        :
                            getDataArray().map((item, index) => (
                                <LeaderItem key={index} stats={item[1]} id={item[0]} type={board}>
                                </LeaderItem>
                            ))
                    }
                </Box>
            </Paper>
        </Box>
    );
}