import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import BackHome  from "../../components/BackHome/BackHome.jsx";
import style from './Profile.module.css'


const Profile=()=>{
    const { pathname }=useLocation();
    const navigate= useNavigate();
    const handleTabClick=(path)=>{
        navigate(`/profile/${path}`);
    }

    return(
        <div>
            <BackHome className={style.buttonHome}/>
              <div className={style.tabContainer}>
                  <span className={`${pathname.includes('my-info')? style.active : ''} ${style.tab}`}
                        onClick={()=>handleTabClick('my-info')}
                        style={{marginRight: '8px'}}>
                      Mi Informacion
                  </span>
                  <span className={`${pathname.includes('liked-events')? style.active : ''} ${style.tab}`}
                        onClick={()=>handleTabClick('liked-events')}>
                      Eventos Favoritos
                  </span>
              </div>

        <Outlet/>
        </div>
    )
};

export default Profile;