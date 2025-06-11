import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import './styles/footer.css'

const Footer = observer(() => {
    return (
     <footer>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </footer>
    )
})

export default Footer