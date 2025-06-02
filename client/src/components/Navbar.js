import React from 'react'
import {observer} from 'mobx-react-lite'
import './styles/navbar.css'
import { useTheme } from '../context/ThemeProvider'

const Navbar = observer(() => {
    const {theme, toggleTheme} = useTheme()

    return (
        <nav className='Primary'>
            <button className='change-theme'
                    onClick={toggleTheme}>
                Change theme (now: {theme})
                </button>
        </nav>
    )
})

export default Navbar