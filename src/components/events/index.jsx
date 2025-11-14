import EventItem from './eventsItem/eventItem.jsx'
import data from '../../data/events.json'
console.log(data)
const events = data._embedded.events
const handleEventItemClick = (id) => {
console.log('evento de click:', id)
}
const Events= ({searchTerm})=>{

    const renderEvents = ()=>{
        let eventFiltered= events;
        if(searchTerm.length > 0){
            eventFiltered = events.filter(item=>item.name.toLocaleLowerCase().includes(searchTerm) )
        }
        return eventFiltered.map((eventItem)=>(
            <EventItem
                key={`event-item: ${eventItem.id}`}
                name={eventItem.name}
                image={eventItem.images[2].url}
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