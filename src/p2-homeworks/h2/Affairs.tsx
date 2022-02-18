import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import a from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: string
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={props.filter === 'all' ? a.selected__button : a.button}>
                All
            </button>
            <button onClick={setHigh} className={props.filter === 'high' ? a.selected__button : a.button}>
                High
            </button>
            <button onClick={setMiddle} className={props.filter === 'middle' ? a.selected__button : a.button}>
                Middle
            </button>
            <button onClick={setLow} className={props.filter === 'low' ? a.selected__button : a.button}>
                Low
            </button>
        </div>
    )
}

export default Affairs
