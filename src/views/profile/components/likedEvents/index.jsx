import {LIKED_EVENTS_STORAGE_KEY} from '../../../../utils/constants.js'
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import EventItem from "../../../../components/events/eventsItem/eventItem.jsx";

const apiKey = import.meta.env.VITE_TICKETMASTER_APIKEY;

const LikedEvents=()=>{
    const [events, setEvents]=useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError]=useState({})
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchEventsDetails=async()=>{
            try{
                const likedEvents=JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY))|| [];
                const results= [];
                for (const eventId of likedEvents){
                    const response=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${apiKey}`)
                    const data=await response.json();
                    results.push(data)
                }
                setEvents(results);
            }catch(error){
            setError(error)
            }finally{
                setIsLoading(false)
            }
        }
        fetchEventsDetails()
    },[]);

    const handleEventItemClick=(eventId)=>{
        navigate(`/detail/${eventId}`)
    }
    if(isLoading){
        return <div>Cargando....</div>
    }
    if(Object.keys(error).length> 0){
        return <div>Error</div>
    }
    return (
        <div>
            {events.map((event,index)=>
<EventItem
    key={`liked-event-item: ${event.id}-${index}`}
    name={event.name}
    image={event.images[0].url}
    info={event.info}
    onEventClick={handleEventItemClick}
    id={event.id}

/>
            )}
        </div>
    )
}

export default LikedEvents;