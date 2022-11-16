import React,{useState} from 'react';
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai'
import { Sidebar } from './sidebar'
import './navbar.css'
import { IconContext } from 'react-icons'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
     <div className="navbar">
        <Link to="#" className='menu-bars'>
            <FaBars onClick={showSidebar}/>
        </Link>
     </div> 
     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="#" className='menu-bars'>
                    <AiOutlineClose/>
                </Link>
            </li>
            {Sidebar.map((item,index) => {
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icons}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
     </nav>  
     </IconContext.Provider>   
    </>
  )
}

export default Navbar
