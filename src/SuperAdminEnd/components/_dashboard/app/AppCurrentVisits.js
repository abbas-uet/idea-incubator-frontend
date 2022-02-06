import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';

// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';




// ----------------------------------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(2, 2),
  // color: theme.palette.warning.darker,
  // backgroundColor: theme.palette.warning.lighter
}));


export default function AppCurrentVisits() {
  const theme = useTheme();

  const state = {
          
    series: [{
        name: "Desktops",
        data: [19456, 36290, 64870, 47843, 81000, 59543]
    }],
    options: {
      chart: {
        height: 290,
        type: 'area',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Payments',
        align: 'left',
        
      },
      // grid: {
      //   row: {
      //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      //     opacity: 0.5
      //   },
      // },
      xaxis: {
        categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
      },
      yaxis:{
        min:0,
      max:100000,
      tickAmount:5
    },
      
    },
  
  
  };



  return (
    <Card>
      <RootStyle>

      <ReactApexChart options={state.options} series={state.series} type="area" height={280} />
      </RootStyle>
    </Card>
  );
}
