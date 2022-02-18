import React from 'react'
import {NavLink,} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './pages/Header.module.css'


type isActiveType = {
    isActive: boolean
}

const setActive = ({isActive}: isActiveType) => isActive ? s.active : ''

function Header() {

    return (
        <div className={s.header}>
            <div className={s.item}>
                <NavLink to={PATH.PRE_JUNIOR} className={setActive}>PreJunior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR} className={setActive}>Junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR_PLUS} className={setActive}>Junior+</NavLink>
            </div>
            <button className={s.button}/>
        </div>

    )

}

export default Header
