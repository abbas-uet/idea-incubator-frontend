import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from './Component/AuthLayout';
// components
import Page from '../AdminEnd/components/Page';
import { MHidden } from '../AdminEnd/components/@material-extend';
import { RegisterForm } from './Component/register';
import AuthSocial from './Component/AuthSocial';
import ilustration_register from '../Utils/static/illustrations/illustration_register.png';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
    return (
        <RootStyle title="Register | Idea Incubator">

            <MHidden width="mdDown">
                <SectionStyle>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        Idea Incubator
                    </Typography>
                    <img alt="register" src={ilustration_register} />
                </SectionStyle>

            </MHidden>

            <Container>
                <ContentStyle>
                    <Box sx={{ mb: 5 }}>
                        <Typography variant="h4" gutterBottom>
                            Get started Incubate your Idea.
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Submit Your Idea Information Here.
                        </Typography>
                    </Box>

                    <RegisterForm />

                </ContentStyle>
            </Container>
        </RootStyle>
    );
}
