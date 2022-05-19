import {filter} from "lodash";

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}



export function applySortFilter(array, comparator, query, filterSearchBy) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    if (query) {
        return filterSearchBy === 'id' ? filter(array, (_user) => _user.id === parseInt(query)) :
            filterSearchBy === 'name' ? filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) :
                filterSearchBy === 'projectname' ? filter(array, (_user) => _user.projectname.toLowerCase().indexOf(query.toLowerCase()) !== -1) :
                    filter(array, (_user) => _user.companyname.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    }
    return stabilizedThis.map((el) => el[0]);
}
