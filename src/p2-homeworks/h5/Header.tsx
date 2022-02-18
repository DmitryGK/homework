import React, {useState} from 'react'
import {NavLink,} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './pages/Header.module.css'


function Header() {

    const [showLinks, setShowLinks] = useState(false)
    console.log(showLinks)

    const onClickChanger = () => {
        setShowLinks(true)
    }
    const onClickCloser = () => {
        setShowLinks(false)
    }


    return showLinks
        ? <div className={s.header}>
            <div className={s.link}>
                <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            </div>
            <div>
                <button onClick={onClickCloser} className={s.setButton}/>
            </div>
        </div>
        : <div>
            <button onClick={onClickChanger} className={s.closeButton}/>

        </div>


}

export default Header
