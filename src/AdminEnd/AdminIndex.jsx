
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import {Outlet} from "react-router-dom";
import React from "react";

// ----------------------------------------------------------------------

export default function AdminIndex() {
    return (
        <ThemeConfig>
            <ScrollToTop />
            <GlobalStyles />
            <BaseOptionChartStyle />
            <Outlet/>
        </ThemeConfig>
    );
}
