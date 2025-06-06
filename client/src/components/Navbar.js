import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import './styles/navbar.css'
import { useTheme } from '../context/ThemeProvider'
import {NavLink} from 'react-router-dom'
import {Context} from '../index'


const Navbar = observer(() => {
    const {theme, toggleTheme} = useTheme()
const {user} = useContext(Context)
    return (
        <nav className='Secondary'>
      
       <div>   
  <img src ='assets/ZOF_logoNavbar.png' className = 'logo'/> 
  </div>  
    <ul>

   <li className = 'elem'><NavLink href="#">Home</NavLink></li>
   <li className = 'elem'><NavLink href="#">Charts</NavLink></li>
   <li className = 'elem'><NavLink href="#">Report a fire</NavLink></li>
   <li className = 'elem'><NavLink href="#">Team</NavLink></li>
   <li className = 'elem'><NavLink href="#">About</NavLink></li>
   <li className = 'elem'><NavLink className='change-theme'
                    onClick={toggleTheme}>
                Theme ({theme})</NavLink></li>
                
</ul>
            <div>
            {   
                true ? 
               <NavLink className = 'adminButton' href="#">Admin</NavLink>: 

             <NavLink className = 'logInIcon'><img src ='assets/logIn_icon.png' className='logIn'/> </NavLink>
            }
            </div>


   
        </nav>
    )
})

export default Navbar