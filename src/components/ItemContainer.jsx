import { React } from 'react'
import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material';
import BuyItem from "./BuyItem";

export default function ItemContainer(props) {
    const items = props.items;

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 5, alignItems: 'center', padding: 1 }}>
            { items.map(item =>
                <Card key={ item.name } sx={{ width: 200, minWidth: 200, mx: 'auto', mt: 2, boxShadow: 3 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={`/images/${item.image}.png`}
                        title={item.name}
                    />
                    <CardContent sx={{textAlign: 'center', pt: 0}}>
                        <Typography gutterBottom variant="body1">
                            {item.name}
                        </Typography>
                        <Typography variant="body2">
                            {item.description}
                        </Typography>
                        <BuyItem cost={item.cost}/>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
}