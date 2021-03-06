import {Icon} from '@iconify/react';
import {useRef, useState} from 'react';
import editFill from '@iconify/icons-eva/edit-fill';
import {Link as RouterLink} from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
import {Menu, MenuItem, IconButton, ListItemIcon, ListItemText} from '@mui/material';

// ----------------------------------------------------------------------

export default function UserMoreMenu({pageName, id}) {

    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <IconButton ref={ref} onClick={() => setIsOpen(true)}>
                <Icon icon={moreVerticalFill} width={20} height={20}/>
            </IconButton>

            <Menu
                open={isOpen}
                anchorEl={ref.current}
                onClose={() => setIsOpen(false)}
                PaperProps={{
                    sx: {width: 200, maxWidth: '100%'}
                }}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                <MenuItem component={RouterLink}
                          to={"/admin/dashboard/" + pageName.toLowerCase() + "/details" + pageName + '/' + id}
                          sx={{color: 'text.secondary'}}>
                    <ListItemIcon>
                        <Icon icon={'mdi:card-account-details-outline'} width={24} height={24}/>
                    </ListItemIcon>
                    <ListItemText primary="Get Details" primaryTypographyProps={{variant: 'body2'}}/>
                </MenuItem>

            </Menu>
        </>
    );
}
