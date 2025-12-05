import {useState} from "react";
import {LIKED_EVENTS_STORAGE_KEY} from "../utils/constants.js";

const checkEventLiked=(eventId)=>{
        const likedEvents=JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY )) || [];
      return likedEvents.includes(eventId);
}

const useLikeEvents=(eventId)=>{
    const[isLiked, setIsLiked] = useState(checkEventLiked(eventId));

    const toggleEventLiked=()=>{
        const likedEvents=JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        const eventIndex=likedEvents.indexOf(eventId);
        if(eventIndex !== -1){
            likedEvents.splice(eventIndex, 1);
            setIsLiked(false);
        }else{
            likedEvents.push(eventId);
            setIsLiked(true);
        }
        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
    }
    return {
        isLiked,
        toggleEventLiked,
    }
}

export default useLikeEvents;