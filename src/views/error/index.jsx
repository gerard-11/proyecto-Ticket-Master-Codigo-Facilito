import styles from './error404.module.css'
import {useRouteError} from "react-router-dom";
import BackHome from "../../components/BackHome/BackHome.jsx";

const Error404=()=>{
    const error=useRouteError()
    console.log(error)
    return(
        <>
            <BackHome className={styles.button}/>
            <div className={styles.container}>
                <h3 className={styles.title}>{error?.status} Ops!</h3>
                <p className={styles.description}>{error.data}</p>
            </div>
        </>

    )
}

export default Error404;