import { Icon } from '@iconify/react';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import { Grid } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(2, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const Approved = 13528;
const Pending= 1500;

export default function AppNewUsers() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={appleFilled} width={24} height={24} />
      </IconWrapperStyle>
      <Grid container direction="row" justifyContent="center" alignItems="center" >
      <Grid item md={6}>
        <Typography variant="h6" sx={{ opacity: 0.72 }}>
        Pending Ideas
      </Typography>
        </Grid>
        <Grid item md={6}>
      <Typography variant="h6" sx={{ opacity: 0.72 }}>
        Approved Ideas
      </Typography>
        </Grid>
      </Grid>
       <Grid container direction="row" justifyContent="center" alignItems="center" >
      <Grid item md={6}>
      <Typography variant="h3">{fShortenNumber(Pending)}</Typography>
      </Grid>
        <Grid item md={6}>
      <Typography variant="h3">{fShortenNumber(Approved)}</Typography>
        </Grid>
        </Grid>
    </RootStyle>
  );
}