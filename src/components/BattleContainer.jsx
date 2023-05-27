import { React } from 'react';
import {Box, Typography, Grid, Card} from '@mui/material';
import BattleItem from "./BattleItem";

export default function BattleContainer(props) {
    const battles = props.battles;
    const charType = props.charType;
    return (
        <Box>
            {
                <Card sx={{width: '100%', height: 250, mt: 1, boxShadow: 3, pt: 1, pb: 1, overflow: 'auto'}}>
                    <Grid container display="flex" alignItems="center">
                        <Typography variant="body1" sx={{ml:2}}>
                            Past Battles
                        </Typography>
                        {
                            battles && battles.length > 0 ?
                                battles.map((item, index) => (
                                    <BattleItem key={index} stats={item} charType={charType}>
                                    </BattleItem>
                                ))
                            :
                                ""
                        }
                    </Grid>
                </Card>
            }
        </Box>
    );
}