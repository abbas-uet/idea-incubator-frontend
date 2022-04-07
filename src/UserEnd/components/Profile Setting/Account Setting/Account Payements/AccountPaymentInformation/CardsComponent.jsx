import React from 'react'
import {Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CardsComponent(props) {
    const cardsArray = props.cardsArray;
    const deleteCard = props.deleteCard;
    return (
        <List >
            {
                cardsArray.map(cardItem => {
                    return <ListItem key={cardItem.id}
                        secondaryAction={
                            <IconButton color='error' edge="end" aria-label="delete" onClick={() => { deleteCard(cardItem.id) }}>
                                < DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <CreditCardIcon color='primary' />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={cardItem.cardNum}
                        />
                    </ListItem>
                })
            }

        </List>

    );
}
