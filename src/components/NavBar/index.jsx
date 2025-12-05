import {useState} from "react";
import {Link} from 'react-router-dom'

const NavBar=({onSearch})=>{
    const [search,setSearch]=useState('')
    const handleInputChange=(e)=>{
      setSearch(e.target.value);
    }
    const handleInputKeyDown=(e)=>{
        if(e.key==='Enter'){
            onSearch(search)
        }
    }

    return (
        <div>
            <p>Mi boletera</p>
            <input
            placeholder="Buscar por evento"
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={search}
            />
            <Link to= '/profile/my-info' style={{
                textDecoration: 'none',
                marginLeft: '25px',
                padding: '10px',
                color: 'white',
                borderRadius: '5px',
                width: '200px',
            }}>Mi Perfil</Link>
        </div>
    )
}

export default NavBar;