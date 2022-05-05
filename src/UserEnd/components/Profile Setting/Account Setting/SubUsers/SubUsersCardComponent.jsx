import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Badge} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function SubUsersCardComponent(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card >
            <CardHeader
                action={<Badge badgeContent={"Owner"} color="primary"  sx={{ marginRight: 4,marginBottom:5 }}>
                </Badge>}

            />



            <Avatar sx={{ height: '152px', width: '152px', marginLeft: 10 }}>
                <CardMedia
                    component="img"
                    height="150"
                    image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Paella dish"
                />
            </Avatar>

            <CardContent>
                <Typography variant="body1" fontWeight={'bold'} sx={{mb:1}}>Noor ul kamishkah</Typography>
                <Typography variant="body2" sx={{mb:2}} >
                 <EmailIcon color='disabled'/>   2018CS84@student.uet.edu.pk
                </Typography>
            <Divider/>
                <Stack direction={'row'} spacing={1} sx={{mt:1.5}} >
                <Typography variant="body2" fontWeight={'bold'} >Last Login:</Typography>
                <Typography variant="body2" >April 15,2022</Typography>
                </Stack>
            </CardContent>

        </Card>
    );
}
