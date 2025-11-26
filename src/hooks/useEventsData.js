
import useEventsResults from "../state/events-results.jsx";



const useEventsData=()=>{
const{data,error,fetchEvents,isLoading}=useEventsResults()

    return {
        events:data?._embedded?.events || [],
        page:data?.page || {},
        error,
        isLoading,
        fetchEvents,
    }
}

export default useEventsData