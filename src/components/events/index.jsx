import EventItem from './eventsItem/eventItem.jsx'

import {useNavigate} from 'react-router-dom'

const Events= ({searchTerm,events})=>{

    const navigate = useNavigate();

    const handleEventItemClick = (id) => {
       navigate(`/detail/${id}`)
    }

    const renderEvents = ()=>{
        let eventFiltered= events;
        if(searchTerm.length > 0){
            eventFiltered = events.filter(item=>item.name.toLocaleLowerCase().includes(searchTerm) )
        }
        return eventFiltered.map((eventItem)=>(
            <EventItem
                key={`event-item: ${eventItem.id}`}
                name={eventItem.name}
                image={eventItem.images[0].url}
                info={eventItem.info}
                onEventClick={handleEventItemClick}
                id={eventItem.id}
            />
        ))
    }
    return (
        <div>
      eventos
            {renderEvents()}
        </div>
    )
}
export default Events