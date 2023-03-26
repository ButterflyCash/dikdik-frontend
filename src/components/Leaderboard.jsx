import { React, useEffect, useState } from 'react';
import { Box, Paper, Typography, Button, ButtonGroup } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { db } from "../utils/firebase";
import { onValue, ref } from "firebase/database";
import LeaderItem from "./LeaderItem";

export default function Leaderboard() {
    const theme = useTheme();

    const [attackers, setAttackers] = useState([]);
    const [defenders, setDefenders] = useState([]);
    const [attackSelected, setAttackSelected] = useState(true);

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

    useEffect(() => {
        getAttackers();
        getDefenders();
    }, []);

    return (
        <Box sx={{padding: 2}}>
            <Paper elevation={5} sx={{bgcolor:`${theme.palette.info.main}`, color: 'black', padding: 2, maxWidth: 600, margin: 'auto', boxShadow:'inset 0px 0px 10px rgba(0,0,0,0.9)'}}>
                <Typography variant="h3" sx={{overflowWrap: 'break-word', textAlign: 'center'}}>
                    Leaderboard
                </Typography>
                <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                    <ButtonGroup size="small" aria-label="small button group">
                        <Button variant={attackSelected ? "contained" : "outlined"} onClick={() => {setAttackSelected(true)}}>Attackers</Button>
                        <Button variant={attackSelected ? "outlined" : "contained"} onClick={() => {setAttackSelected(false)}}>Defenders</Button>
                    </ButtonGroup>
                </Box>
                <Typography variant="body1" sx={{textAlign: 'center', mt: 1}}>
                    {
                        attackSelected ?
                        "ID - # Attacks - # Success - Damage - KOs"
                        :
                        "ID - # Defenses - # Success - Damage - KOs"
                    }
                </Typography>
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', width: '100%' }}>
                    {
                        attackSelected ?
                            attackers.map((attacker, index) => (
                                <LeaderItem key={index} stats={attacker[1]} id={attacker[0]} isAttack={true}>
                                </LeaderItem>
                            ))
                            :
                            defenders.map((defender, index) => (
                                <LeaderItem key={index} stats={defender[1]} id={defender[0]} isAttack={false}>
                                </LeaderItem>
                            ))
                    }
                </Box>
            </Paper>
        </Box>
    );
}