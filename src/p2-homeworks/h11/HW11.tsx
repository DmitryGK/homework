import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)



    const onChangeSliderValue1 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(parseInt(e.currentTarget.value, 10))
    }
    const onChangeSliderValue2 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue2(parseInt(e.currentTarget.value, 10))
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
                    onChangeValue={onChangeSliderValue1}
                />
                
            </div>

            <div>
                
                <SuperDoubleRange
                    min={0}
                    max={100}
                    step={1}
                    value1={value1}
                    value2={value2}
                    onChangeValue2={onChangeSliderValue2}
                    onChangeValue={onChangeSliderValue1}
                />
                
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
