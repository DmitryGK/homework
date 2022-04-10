import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)



    const onChangeSlider = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(parseInt(e.currentTarget.value, 10))
    }

    return (

        <div>
            <hr />
            homeworks 11
            <div>
                
                <SuperRange
                    min={0}
                    max={100}
                    step={1}
                    value={value1}
                    onChangeValue={onChangeSlider}
                />
                
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange

                />
                <span>{value2}</span>
            </div>

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr />
        </div>
    )
}

export default HW11
