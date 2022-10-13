import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarButtons from '../Navbar/NavbarButtons'
import './Sidebar.css'
const Sidebar =({isOpen, setIsOpen, navItems=[], isLoggedIn})=>{
    // const [isOpen,setIsOpen]=useState(false)
    // const [close,setClose]=useState(false)

    return(  
    <> 
    {/* <button className="nav-button" onClick={()=>setIsOpen(!isOpen)}>Toggle</button> */}
    <div className={isOpen? "sidebar-open": "sidebar "}>
     <div className='close-btn-div'>
     <button className="sidebar-close-btn" onClick={()=>{setIsOpen(!isOpen)}}>X</button>   
     </div>
    {/* <h1>sidebar</h1> */}
    {/* <div className='nav-links-div'> */}
    <ul className='nav-links'>
          {
            navItems.map(({ label, url, id, authRequired }, index) => {
              console.log('Link navigation', label, url, index);
              console.log(authRequired)
              console.log('Url',url)
              if(!isLoggedIn && authRequired)
              return null;
              
              else
              return (
                // TODO: Implement Link component and add the url parameter
                <li key={`${index}_${id}`}>
                 <Link className='link-style' onClick={()=>{setIsOpen(!isOpen)}}
                  to={url}>{label}</Link> 
                 </li>
              )
            })
          }
        </ul>
    {/* </div> */}
    <NavbarButtons style={{display:'flex', justifyContent:'center'}}/>
    </div>
    
    </>
    )
}

export default Sidebar