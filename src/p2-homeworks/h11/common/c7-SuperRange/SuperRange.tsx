import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'



type SuperRangePropsType = {
    step: number
    min: number
    max: number
    value: number
    onChangeValue: (e:ChangeEvent<HTMLInputElement>) => void
}

const SuperRange = (props: SuperRangePropsType) => {

  const {
      step,
      min,
      max,
      value,
      onChangeValue
  } = props

  const handleChange = (value: number) => (e:ChangeEvent<HTMLInputElement>) => {
      onChangeValue(e)
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
                    value={value}
                    onChange={handleChange(max)}
                />
          </div>
      </>
  )   
}

export default SuperRange