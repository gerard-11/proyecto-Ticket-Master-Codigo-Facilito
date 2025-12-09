import {useEffect, useState, useCallback, useRef} from "react";
import NavBar from "../../components/NavBar/index.jsx";
import Events from "../../components/events/index.jsx";
import useEventsData from '../../hooks/useEventsData'
import ReactPaginate from 'react-paginate';
import styles from  './home.module.css'
import BackHome from "../../components/BackHome/BackHome.jsx";
/*import {useNavigate} from "react-router-dom";*/

const Home= ()=>{
    const {events,error, fetchEvents,page} = useEventsData()
    const [searchTerm, setSearchTerm] = useState('');
let fetchMyEventsRef=useRef()

    fetchMyEventsRef.current=fetchEvents;
    useEffect(()=>{
        fetchMyEventsRef.current()
    },[])

    const handleNavBarSearch=(term)=>{
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`)
    }

    const handlePageClick = useCallback(({selected})=>{
            console.log('selected',selected)
        fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
    },[searchTerm,fetchEvents])

    const renderEvents=()=>{
        if(error){
           return  <div>Hubo un error</div>
        }

        return(
            <div>
                <Events searchTerm={searchTerm} events={events}/>
                <ReactPaginate
                    className={styles.pagination}
                    nextClassName={styles.next}
                    previousClassName={styles.previous}
                    pageClassName={styles.page}
                    activeClassName={styles.active}
                    disabledClassName={styles.disabledPage}
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={Math.ceil(page.totalPages)}
                    previousLabel="<"
                    renderOnZeroPageCount={null}/>
            </div>

        )
    }

    return (
        <>
            <NavBar onSearch={handleNavBarSearch}/>
            {renderEvents()}

        </>
    )
}

export default Home


