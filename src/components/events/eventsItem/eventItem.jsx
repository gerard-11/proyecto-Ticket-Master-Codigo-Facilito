/*import {Link} from 'react-router-dom'*/
import style from './style.module.css'
import hearthfilled from '../../../assets/hearth-filled.png'
import hearthunfilled from '../../../assets/hearth-unfilled.png'
import useLikeEvent from '../../../hooks/useLikeEvents.js/'

const EventItem = ({id,info,name,image,onEventClick}) => {
    const {isLiked,toggleEventLiked }=useLikeEvent(id)
    const handleSeeMoreClick=(e)=> {
        e.stopPropagation();
        onEventClick(id);
    }
    const handleHeartClick=()=>{
        toggleEventLiked();
    }
    return (
        <div className={style.eventItemContainer}>
            <div className={style.imageContainer}>
                <img src={isLiked? hearthfilled : hearthunfilled} alt='heart' className={style.heartImage} onClick={handleHeartClick}/>
                <img src={image} alt={name} width='200' className={style.imgMain}/>
            </div>
            <div className={style.container} >
                <div className={style.infoContainer}>
                    <h4 className={style.eventTitle}>{name}</h4>
                    <p className={style.eventInfo}>{info}</p>
                    <button onClick={handleSeeMoreClick} className={style.buttonCard}>
                        {/*    <Link to={`/detail/${id}`}></Link>*/}
                        ver mas
                    </button>
                </div>
            </div>
        </div>

    )
}

export default EventItem