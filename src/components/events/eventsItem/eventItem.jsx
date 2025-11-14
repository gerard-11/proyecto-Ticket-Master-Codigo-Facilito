const EventItem = ({id,info,name,image,onEventClick}) => {
    const handleSeeMoreClick=(e)=> {
        e.stopPropagation();
        onEventClick(id);
    }
    return (
        <div >
            <img src={image} alt={name} width='200'/>
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handleSeeMoreClick}>ver mas </button>
        </div>
    )
}

export default EventItem