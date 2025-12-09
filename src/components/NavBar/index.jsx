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
            <p style={{fontSize:'25px',
                fontWeight:'bold',
                color:'black',
                marginTop:'5px',

            }}>Mi boletera</p>
            <input
            placeholder="Buscar por evento"
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={search}
            style={{padding:'8px',
                   backgroundColor:'white',
                    border:'none',
                borderRadius:'5px',
                width:'30%',
               color:'black',
            }}
            />
            <Link to= '/profile/my-info' style={{
                marginLeft: '35px',
                padding: '10px',
                color: 'black',
                borderRadius: '5px',
                width: '200px',
                fontSize: '20px',
            }}>Mi Perfil</Link>
        </div>
    )
}

export default NavBar;