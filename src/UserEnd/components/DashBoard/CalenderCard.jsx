import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {createEventId, INITIAL_EVENTS} from './event-utils'
import {Box, Grid, Paper, Typography} from '@mui/material';

export default class CalenderCard extends React.Component {

    state = {
        weekendsVisible: false,
        currentEvents: []
    }

    render() {
        return (

            <Paper elevation={5} sx={{ mt: 1, ml: 2, mb: 1, mr: 1 }}  >
                {console.log(INITIAL_EVENTS)}
                <Grid container>
                    <Grid item sx={{ m: 1 }}>
                        <Typography variant="h5" component="div">Calender</Typography>
                    </Grid>
                </Grid>
                <Box sx={{ m: 2 }}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next,today',
                            right: 'dayGridMonth,timeGridDay'
                        }}
                        initialView='dayGridMonth'
                        editable={false}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={this.state.weekendsVisible}
                        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                        eventContent={renderEventContent} // custom render function
                        eventClick={this.handleEventClick}
                        eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed

                    />
                </Box>
            </Paper>
        )
    }
    handleWeekendsToggle = () => {
        this.setState({
            weekendsVisible: !this.state.weekendsVisible
        })
    }

    handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    handleEvents = (events) => {
        this.setState({
            currentEvents: events
        })
    }

}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}