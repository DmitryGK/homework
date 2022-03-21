import React from 'react'
import s from './Junior.module.css'
import HW7 from "../../h7/HW7";
import HW8 from '../../h8/HW8';

function Junior() {
    return (
        <div className={s.header}>
            Junior
            <HW7 />
            <HW8 />
        </div>
    )
}

export default Junior

