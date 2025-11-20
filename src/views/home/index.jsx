import {useEffect, useState} from "react";
import NavBar from "../../components/NavBar/index.jsx";
import Events from "../../components/events/index.jsx";
import useEventsData from '../../hooks/useEventsData'
/*import {useNavigate} from "react-router-dom";*/

const Home= ()=>{
    const {events, fetchEvents} = useEventsData()
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(()=>{
        fetchEvents()
    },[])

    const handleNavBarSearch=(term)=>{
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`)
    }

    return (
        <>
            <NavBar onSearch={handleNavBarSearch}/>
            {<Events searchTerm={searchTerm} events={events}/>}

        </>
    )
}

export default Home


