import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import Logo_svg from '../../Utils/static/logo.svg'

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src={Logo_svg} sx={{ width: 40, height: 40, ...sx }} />;
}
