import {React, useState, useEffect, useRef} from 'react'
import {Box, Card, CardContent, Grid, ToggleButton, ToggleButtonGroup, Typography, NativeSelect, InputLabel, FormControl} from '@mui/material';
import Image from "mui-image";

export default function ZoogContainer(props) {
    const chunkz = props.chunkz;
    const dikdiks = props.dikdiks;
    const setChar = useRef(props.setChar);
    const [tokens, setTokens] = useState({})
    const [charType, setCharType] = useState('dikdik');
    const [currentChar, setCurrentChar] = useState(0);
    const [errored, setErrored] = useState(false);

    useEffect( () => {
        setTokens({
            "chunkz": chunkz ? chunkz : null,
            "dikdik": dikdiks ? dikdiks : null
        })

    }, [chunkz, dikdiks, setTokens]);

    useEffect(() => {
        setChar.current(charType, currentChar)
    }, [tokens, setChar, charType, currentChar]);

    const handleChange = (event, newChar) => {
        if (newChar !== null) {
            setChar.current = props.setChar;
            setCharType(newChar);
            setCurrentChar(0);
            setErrored(false);
            setChar.current(newChar, 0)
        }
    };

    const handleCharChange = (event) => {
        setChar.current = props.setChar;
        setCurrentChar(event.target.value);
        setChar.current(charType, event.target.value)
    };

    const fixError = () => {
        if (!errored) {
            setErrored(true);
        }
    }

    const getImage = () => {
        if (errored) {
            return `/images/${charType}/unavailable.png`
        }
        return tokens[charType] !== undefined && tokens[charType].length > 0 ? `/images/${charType}/${tokens[charType][currentChar].id}.png` :
            'images/mystery.png';
    }

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: 1 }}>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                <ToggleButtonGroup
                    color="primary"
                    value={charType}
                    exclusive
                    onChange={handleChange}
                    aria-label="char"
                >
                    <ToggleButton value="dikdik">Dik-Dik</ToggleButton>
                    <ToggleButton value="chunkz">Chunkz</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Card key={tokens[charType] !== undefined && tokens[charType].length > 0 ? tokens[charType][currentChar].id : tokens.length}
                   sx={{width: 200, minWidth: 200, mx: 'auto', mt: 2, boxShadow: 3}}>
                <Box sx={{height: 200, width: 200}}>
                    <Image
                        sx={{height: 200}}
                        src={getImage()}
                        onError={fixError}
                        title={tokens[charType] !== undefined && tokens[charType].length > 0 ? tokens[charType][currentChar].name : "Question Mark"}
                    />
                </Box>
                <Box sx={{ width: "95%", mx: 'auto' }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="character-selector">
                            {`Your ${charType}`}
                        </InputLabel>
                        <NativeSelect
                            onChange={handleCharChange}
                            defaultValue={currentChar}
                            inputProps={{
                                name: `character`,
                                id: 'character-selector',
                            }}
                        >
                            {
                                tokens[charType] !== undefined && tokens[charType].length > 0 ?
                                    tokens[charType].map((item, index) =>
                                        <option value={index} key={item.id}>{item.name}</option>
                                    )
                                :
                                    <option value={0}>None</option>
                            }
                        </NativeSelect>
                    </FormControl>
                </Box>
                <CardContent sx={{textAlign: 'center', pt: 0}}>
                    <Typography gutterBottom variant="body1" sx={{mb:2, mt:2}}>
                        {tokens[charType] !== undefined && tokens[charType].length > 0 ? tokens[charType][currentChar].name + "'s stats" : `You have no ${charType}`}
                    </Typography>
                    <Grid container justifyContent="center">
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
                                {tokens[charType] !== undefined && tokens[charType].length > 0 ? tokens[charType][currentChar].level.toString() : "0"}
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
                                {tokens[charType] !== undefined && tokens[charType].length > 0 ? tokens[charType][currentChar].aggression.toString() : "0"}
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
                                {tokens[charType] !== undefined && tokens[charType].length > 0 ? tokens[charType][currentChar].toughness.toString() : "0"}
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
                                {tokens[charType] !== undefined && tokens[charType].length > 0 ? tokens[charType][currentChar].smarts.toString() : "0"}
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
                                {tokens[charType] !== undefined && tokens[charType].length > 0 ? tokens[charType][currentChar].vitality.toString() : "0"}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}