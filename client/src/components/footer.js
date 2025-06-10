import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import './styles/footer.css'
import { useTheme } from '../context/ThemeProvider'
import {Context} from '../index'

const Footer = observer(() => {
    const {theme, toggleTheme} = useTheme()
const {user} = useContext(Context)
    return (
     <footer>
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
    </footer>
    )
})

export default Footer