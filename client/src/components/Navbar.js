import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import './styles/navbar.css'
import { useTheme } from '../context/ThemeProvider'
import {NavLink} from 'react-router-dom'
import {Context} from '../index'
import { ABOUT, ADMIN_ROUTE, CHARTS, INFO, LOGIN_PAGE, MAIN_PAGE_ROUTE, MAP, REPORT_A_FIRE } from '../utils/consts'

const Navbar = observer(() => {
    const {theme, toggleTheme} = useTheme()
const {user} = useContext(Context)
    return (
        <nav className='Secondary'>
      
       <div>   
  <img src ='./assets/ZOF_logoNavbar.png' className = 'logo' alt='logo'/> 
  </div>  
    <ul>

   <li className = 'elem'><NavLink to={MAIN_PAGE_ROUTE}>Home</NavLink></li>
   <li className = 'elem'><NavLink to={CHARTS}>Charts</NavLink></li>
   <li className = 'elem'><NavLink to={MAP}>Map</NavLink></li>
   <li className = 'elem'><NavLink to={REPORT_A_FIRE}>Report a fire</NavLink></li>
   <li className = 'elem'><NavLink to={INFO}>Info</NavLink></li>
   <li className = 'elem'><NavLink to={ABOUT}>About</NavLink></li>
   <li className = 'elem'><NavLink className='change-theme'
                    onClick={toggleTheme}>
                Theme ({theme})</NavLink></li>
                
</ul>
            <div>
            {   
                user.isAuth ? 
               <NavLink className = 'adminButton' to={ADMIN_ROUTE}>Admin</NavLink>: 

             <NavLink className = 'logInIcon' to={LOGIN_PAGE}><img src ='./assets/logIn_icon.png' alt='login' className='logIn'/> </NavLink>
            }
            </div>


   
        </nav>
    )
})

export default Navbar