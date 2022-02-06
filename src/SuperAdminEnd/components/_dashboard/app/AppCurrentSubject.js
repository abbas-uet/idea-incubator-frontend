import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 280;
const LEGEND_HEIGHT = 40;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(0),
  '& .apexcharts-canvas svg': {
    height: CHART_HEIGHT
  },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------

const CHART_DATA = [
  { name: 'Student:', data: [360, 550, 800, 650] },

];

export default function AppCurrentSubject() {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 2 },
    fill: { opacity: 1 },
    legend: { floating: true, horizontalAlign: 'center' },
    xaxis: {
      categories: ['2018', '2019', '2020', '2021'],
    },
    yaxis:{
      min:0,
    max:1000,
    tickAmount:4
  },
    plotOptions: {
      bar: {
        distributed: true
      }
    } 
  });
   

  return (
    <Card>
      <CardHeader title="Talent" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={240}/>
      </ChartWrapperStyle>
    </Card>
  );
}
