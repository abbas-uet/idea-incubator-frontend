

import './calender.css';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { extend } from '@syncfusion/ej2-base';
import Paper from '@mui/material/Paper';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { SampleBase } from './sample-base';
import { PropertyPane } from './property-pane';
import * as dataSource from './dataSource.json';

/**
 * Schedule Default sample
 */
export class Calender extends SampleBase {
    scheduleObj;
    data = extend([], dataSource.scheduleData, null, true);
    change(args) {
        this.scheduleObj.selectedDate = args.value;
        this.scheduleObj.dataBind();
    }
    onDragStart(args) {
        args.navigation.enable = true;
    }
    render() {
        return (
            <Paper sx={{ mt: 4, ml: 2, mb: 1, mr: 1 }}>

            <div className='schedule-control-section'>
            <div className='col-lg-12 control-section'>
                <div className='control-wrapper'>
                    <ScheduleComponent height='500px' ref={schedule => this.scheduleObj = schedule} selectedDate={new Date(2021, 0, 10)} eventSettings={{ dataSource: this.data }} dragStart={(this.onDragStart.bind(this))}>
                        <ViewsDirective>
                            <ViewDirective option='Day'/>
                            <ViewDirective option='Week'/>
                            <ViewDirective option='WorkWeek'/>
                            <ViewDirective option='Month'/>
                            <ViewDirective option='Agenda'/>
                        </ViewsDirective>
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
                    </ScheduleComponent>
                </div>
            </div>

        </div>
            </Paper>
    );
    }
}

