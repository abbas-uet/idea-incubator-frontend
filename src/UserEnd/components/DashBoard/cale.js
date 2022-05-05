import { render } from 'react-dom';
import './cal.css';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, MonthAgenda, Inject } from '@syncfusion/ej2-react-schedule';

import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from './calendar';
import * as dataSource from './datasource.json';
/**
 * Schedule month agenda sample
 */
export class MonthAgendaView extends SampleBase {
    data = extend([], dataSource.fifaEventsData, null, true);
    render() {
        return (<div className='schedule-control-section'>
            <div className='col-lg-12 control-section'>
                <div className='control-wrapper schedule-wrapper'>
                    <ScheduleComponent width='100%' height='510px' selectedDate={new Date(2021, 5, 20)} eventSettings={{ dataSource: this.data }}>
                        <ViewsDirective>
                            <ViewDirective option='MonthAgenda'/>
                        </ViewsDirective>
                        <Inject services={[MonthAgenda]}/>
                    </ScheduleComponent>
                </div>
            </div>
        </div>);
    }
}

