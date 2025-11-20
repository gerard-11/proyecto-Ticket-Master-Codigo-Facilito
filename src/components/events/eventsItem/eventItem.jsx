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
                <h4>{name}</h4>
                <p>{info}</p>

            </div>
            <button onClick={handleSeeMoreClick}>
                {/*    <Link to={`/detail/${id}`}></Link>*/}
                ver mas
            </button>
        </>

    )
}

export default EventItem