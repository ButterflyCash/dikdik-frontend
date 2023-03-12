import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from "@mui/icons-material/Menu";
import {IconButton} from "@mui/material";
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
                    <MenuItem onClick={handleClose} >Home</MenuItem>
                </Link>
                <Link to="/mint" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>Mint</MenuItem>
                </Link>
                <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>Shop</MenuItem>
                </Link>
                <Link to="/forest" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>Forest</MenuItem>
                </Link>
                <Link to="/leaderboard" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>Leaderboard</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}