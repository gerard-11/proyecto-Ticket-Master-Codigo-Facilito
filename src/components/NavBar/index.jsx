import {useState} from "react";

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
        </div>
    )
}

export default NavBar;