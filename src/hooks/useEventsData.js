import {useState} from "react";
const URL='https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=wwFFUkurLysDN6X6K9DpGfLSa10DfNd5'

const useEventsData=(params)=>{
    const [error, setError] = useState();
    const [data, setData] = useState()
        const fetchEvents=async ()=>{
            try{
                const response  = await fetch(`${URL} ${params?.lenght ? params : ''}`)
                const data= await response.json()
                setData(data)
                console.log(data)
            }catch(error){
                setError(error);
            }
        };

    return {
        events:data?._embedded.events || [],
        error,
        fetchEvents,
    }
}

export default useEventsData