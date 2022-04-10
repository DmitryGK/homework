import React, { ChangeEvent } from 'react'
import s from './SuperDoubleRange.module.css'


type SuperDoubleRangePropsType = {

    value1: number
    value2: number
    min: number
    max: number
    step: number
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeValue2: (e: ChangeEvent<HTMLInputElement>) => void
}

const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {

    const {
        step,
        min,
        max,
        value1,
        value2,
        onChangeValue,
        onChangeValue2
    } = props

    const handleChangeValue1 = (value: number) => (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e)
    }
    const handleChangeValue2 = (value: number) => (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValue2(e)
    }

    return (
        <>
            <div className={s.sliderContainer}>
                <input
                    className={s.rangeSlider}
                    type='range'
                    step={step}
                    min={min}
                    max={max}
                    value={value1}
                    onChange={handleChangeValue1(max)}
                />
                <input
                    className={s.rangeSlider2}
                    type='range'
                    step={step}
                    max={max}
                    value={value2}
                    onChange={handleChangeValue2(max)}
                />
                <span className={s.rangeSliderValue}>{value2}</span>
                <div className={s.rangeMinMaxValues}>
                    <span>{value1}</span><span>{value2}</span>
                </div>
            </div>


        </>
    )
}

export default SuperDoubleRange
