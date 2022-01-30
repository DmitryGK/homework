import React from 'react'
import {AffairType} from "./HW2";
import a from './Affairs.module.css'


type AffairPropsType = {

    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={a.affair}>

            <span className={a.title}>{props.affair.name}</span>
            <span className={a.priority}>{props.affair.priority}</span>

            <button onClick={deleteCallback} className={a.buttonDelete}>X</button>
        </div>
    )
}

export default Affair
