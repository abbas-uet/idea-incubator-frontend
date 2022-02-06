import PropTypes from 'prop-types';
import {Icon} from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
// material
import {styled} from '@mui/material/styles';
import {
    Box,
    Toolbar,
    Tooltip,
    IconButton,
    Typography,
    OutlinedInput,
    InputAdornment
} from '@mui/material';
import SearchByOption from "../SearchByOption";
import Stack from "@mui/material/Stack";

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({theme}) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3)
}));

const SearchStyle = styled(OutlinedInput)(({theme}) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
    }),
    '&.Mui-focused': {width: 320, boxShadow: theme.customShadows.z8},
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${theme.palette.grey[500_32]} !important`
    }
}));

// ----------------------------------------------------------------------

ListToolbar.propTypes = {
    filterSearcBy: PropTypes.string,
    onFilterSearchBy: PropTypes.func,
    searchByOptionList: PropTypes.array,
};

export default function ListToolbar({
                                        filterSearcBy,
                                        onFilterSearchBy,
                                        searchByOptionList,
                                    }) {
    return (
        <RootStyle
            sx={{
                color: 'primary.inherit',
                bgcolor: 'inherit.lighter',

            }}
        >
            <Typography component="div" variant="h6" sx={{mb:0}}>
                Recent Queries
            </Typography>
            <Stack direction="row" spacing={0.5} flexShrink={0} sx={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <SearchByOption select={filterSearcBy} setselectSearchBy={onFilterSearchBy}
                                SEARCH_BY_OPTIONS={searchByOptionList} type={'filter'}/>
            </Stack>
        </RootStyle>
    );
}
