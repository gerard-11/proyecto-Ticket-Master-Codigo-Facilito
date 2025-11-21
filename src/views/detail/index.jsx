import {useParams} from 'react-router-dom'
import { useEffect, useState} from "react";
import Error404 from "../error/index.jsx";
import style from './detail.module.css'
import {format} from 'date-fns'
import {es} from 'date-fns/locale'

const Detail= ()=> {
    const {eventId} = useParams();
    const [eventData, setEventData ]= useState({});
    const [error, setError] = useState();
    const[isLoading,setIsLoading] = useState(true);
    console.log(eventId);

    useEffect(() => {
        const fetchEventData=async()=>{
            try{
                const response=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=wwFFUkurLysDN6X6K9DpGfLSa10DfNd5`)
                const data=await response.json();
                setEventData(data)
                setIsLoading(false);
            }catch(error){
                setEventData({})
                setError(error)
                setIsLoading(false);
            }

        }
        fetchEventData();
    },[])
    console.log('event data:',eventData);
    if(isLoading && Object.keys(eventData) === 0){
        return <div>Cargando...</div>
    }
   /* const newUrlTickets= (url)=>{
        try{
            const url= new URL(url)
            const encoded= urlObj.searchParams.get('u')
            return encoded ? decodeURIComponent(encoded) : url;
        }catch(error){
            console.log(error)
            return url
        }
    }*/
    return(
        <>
            <div className={style.container}>
                <div className={style.mainInfoContainer}>
                    <img className={style.imgDetail} src={eventData?.images?.[0]?.url} alt=''/>
                    <h4>{eventData.name}</h4>
                    <p >{eventData.info}</p>
                    <p className={style.Date}>{format(new Date(eventData?.dates?.start?.dateTime ?? 0), "d LLLL yyyy H:mm",{locale:es} )} hrs</p>
                </div>
                <div className={style.seatMap}>
                    <h3>Mapa del evento</h3>
                    <img src={eventData?.seatmap?.staticUrl} alt='seatmap event'/>
                    <div className={style.containerNotesEvent}>
                        <h3>IMPORTANTE</h3>
                        <p>{eventData?.pleaseNote}</p>
                    </div>
                </div>
                <a href={newUrlTickets(eventData.url)} target='_blank'>ir por tus boletos</a>
            </div>
            {error&& <Error404/>}
        </>

    )
}

export default Detail