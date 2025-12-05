import {useNavigate} from 'react-router-dom'

const BackHome=({className = ''})=>{
    const goHome=useNavigate();
    return (
        <button onClick={()=>goHome('/')} className={`${className}`}>Home</button>
    )
}

export default BackHome