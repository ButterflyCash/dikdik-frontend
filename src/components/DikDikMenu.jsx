import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from "@mui/icons-material/Menu";
import {IconButton, Typography} from "@mui/material";
import { Link } from "react-router-dom";

export default function DikDikMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ mr: 2 , color: 'white'}}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>
                        <Typography variant="h5">
                            Home
                        </Typography>
                    </MenuItem>
                </Link>
                <Link to="/mint" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>
                        <Typography variant="h5">
                            Mint
                        </Typography>
                    </MenuItem>
                </Link>
                <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>
                        <Typography variant="h5">
                            Shop
                        </Typography>
                    </MenuItem>
                </Link>
                <Link to="/forest" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>
                        <Typography variant="h5">
                            Forest
                        </Typography>
                    </MenuItem>
                </Link>
                <Link to="/leaderboard" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>
                        <Typography variant="h5">
                            Leaderboard
                        </Typography>
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
}