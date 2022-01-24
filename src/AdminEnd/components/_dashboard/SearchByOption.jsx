import {Icon} from '@iconify/react';
import {useState} from 'react';
import chevronUpFill from '@iconify/icons-eva/chevron-up-fill';
import chevronDownFill from '@iconify/icons-eva/chevron-down-fill';
// material
import {Menu, Button, MenuItem, Typography} from '@mui/material';

// ----------------------------------------------------------------------

export default function SearchByOption({select, setselectSearchBy, SEARCH_BY_OPTIONS}) {

    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = (event) => {

        setOpen(null);
    }
    const handleMenuItemClick = (event, value) => {
        setselectSearchBy(value)
        setOpen(null);
    };

    return (
        <>
            <Button
                color="inherit"
                disableRipple
                onClick={handleOpen}
                endIcon={<Icon icon={open ? chevronUpFill : chevronDownFill}/>}
            >
                Search By:&nbsp;
                <Typography component="span" variant="subtitle2" sx={{color: 'text.secondary'}}>
                    {select === 'id' ? SEARCH_BY_OPTIONS[0].label : SEARCH_BY_OPTIONS[1].label}
                </Typography>
            </Button>
            <Menu
                keepMounted
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                {SEARCH_BY_OPTIONS.map((option) => (
                    <MenuItem
                        key={option.id}
                        selected={option.id === select}
                        onClick={(event) => handleMenuItemClick(event, option.id)}
                        sx={{typography: 'body2'}}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
