import Events from "./components/events/index.jsx";
import './App.css'
import NavBar from './components/NavBar/index.jsx'
import {useState} from "react";
import Signup from "./components/signUpForm/index.jsx"
import SignUpForm from "./components/signUpForm/index.jsx";

function App() {
    const [searchTerm, setSearchTerm] = useState('');

const handleNavBarSearch=(term)=>{
    setSearchTerm(term);
}
console.log(searchTerm)

  return (
    <>
        {<NavBar onSearch={handleNavBarSearch}/>}
        {/*<SignUpForm/>*/}
        {<Events searchTerm={searchTerm}/>}
    </>
  )
}

export default App
