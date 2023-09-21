import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import './Calender.css'
import useCalendar from '../../store/CalenderStore'
import { createEventId } from '../../assets/Data'

const Calender = () => {
    const {currentEvents,setCurrentEvents}=useCalendar()
    console.log(currentEvents)
    const handleEvents = async (events) => {
        await Promise.resolve(setCurrentEvents(events))
    }
    const handleadd = (selectInfo) => {
        let title = prompt('Please enter a title for the event')
        let calendarApi = selectInfo.view.calendar;
        if(title){
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay
            })
        }
        calendarApi.unselect();}
        const handledelete = (clickInfo) => {
            if (
                confirm('Are you sure you want to delete this event?')
    
            ) {
                clickInfo.event.remove()
            }
        }
  return (
    <div className='calender-container'>
        
        <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
                    headerToolbar={{

                        left: 'prev,next today',
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"

                    }}

                    allDaySlot={false}
                    initialView="timeGridWeek"
                    slotDuration={"01:00:00"}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    nowIndicator={true}
                    initialEvents={currentEvents}
                    eventsSet={handleEvents}
                    select={handleadd}
                    eventClick={handledelete}
                />

    </div>
  )
}

export default Calender
