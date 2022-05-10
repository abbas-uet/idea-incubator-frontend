
import { render } from 'react-dom';

import * as React from 'react';
import {ScheduleComponent, ViewsDirective, ViewDirective, Inject, MonthAgenda} from '@syncfusion/ej2-react-schedule';

import {extend} from '@syncfusion/ej2-base';
import {SampleBase} from './calendar';
import * as dataSource from './datasource.json';
import {Card} from "@mui/material";


import Paper from '@mui/material/Paper';

/**
 * Schedule month agenda sample
 */
export class MonthAgendaView extends SampleBase {

    data = extend([], dataSource.webinarData, null, true);

    render() {
        return (
            <Paper elevation={1} sx={{mt: 3, ml: 1, mb: 1, mr: 1}}>
                <Card>

                    <div className='schedule-control-section'>
                        <div className='col-lg-12 control-section'>
                            <div className='control-wrapper schedule-wrapper'>
                                <ScheduleComponent height='545px' selectedDate={new Date(2021, 1, 15)}
                                                   eventSettings={{dataSource: this.data}}>
                                    <ViewsDirective>
                                        <ViewDirective option='MonthAgenda'/>
                                    </ViewsDirective>
                                    <Inject services={[MonthAgenda]}/>
                                </ScheduleComponent>
                            </div>
                        </div>
                    </div>
                </Card>
            </Paper>
                );
    }
}

