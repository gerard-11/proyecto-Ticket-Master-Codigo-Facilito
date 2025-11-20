/*import {Link} from 'react-router-dom'*/
import style from './style.module.css'

const EventItem = ({id,info,name,image,onEventClick}) => {
    const handleSeeMoreClick=(e)=> {
        e.stopPropagation();
        onEventClick(id);
    }
    return (
        <>
            <div className={style.container} >
                <img src={image} alt={name} width='200'/>
                <div className={style.infoContainer}>
                    <h4 className={style.eventTitle}>{name}</h4>
                    <p className={style.eventInfo}>{info}</p>
                    <button onClick={handleSeeMoreClick}>
                        {/*    <Link to={`/detail/${id}`}></Link>*/}
                        ver mas
                    </button>
                </div>

            </div>

        </>

    )
}

export default EventItem