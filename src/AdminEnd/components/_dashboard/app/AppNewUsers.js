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
  width: theme.spacing(6),
  height: theme.spacing(6),
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const Approved = 41;
const Pending= 324;

export default function AppNewUsers() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={appleFilled} width={20} height={20} />
      </IconWrapperStyle>
      <Grid container direction="row" justifyContent="center" alignItems="center" >
      <Grid item md={6}>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Pending Ideas
      </Typography>
        </Grid>
        <Grid item md={6}>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Approved Ideas
      </Typography>
        </Grid>
      </Grid>
       <Grid container direction="row" justifyContent="center" alignItems="center" >
      <Grid item md={6}>
      <Typography variant="h5">{fShortenNumber(Pending)}</Typography>
      </Grid>
        <Grid item md={6}>
      <Typography variant="h5">{fShortenNumber(Approved)}</Typography>
        </Grid>
        </Grid>
    </RootStyle>
  );
}
