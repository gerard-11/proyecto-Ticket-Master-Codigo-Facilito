import {useParams} from 'react-router-dom'
import { useEffect, useState} from "react";
import Error404 from "../error/index.jsx";


const Detail= ()=> {
    const {eventId} = useParams();
    const [eventData, setData ]= useState({});
    const [error, setError] = useState();
    const[isLoading,setIsLoading] = useState(true);
    console.log(eventId);

    useEffect(() => {
        const fetchEventData=async()=>{
            try{
                const response=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=wwFFUkurLysDN6X6K9DpGfLSa10DfNd5`)
                const data=await response.json();
                setData(data)
                setIsLoading(false);
            }catch(e){
                setData({})
                setError(e)
                setIsLoading(false);
            }

        }
        fetchEventData();
    },[])
    console.log(eventData);
    return(
        <>
            <div>Detail</div>
            {error&& <Error404/>}
        </>

    )
}

export default Detail