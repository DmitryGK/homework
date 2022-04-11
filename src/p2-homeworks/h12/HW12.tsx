import React from "react";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = 'some'; // useSelector

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr />
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                />
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr />
        </div>
    );
}

export default HW12;
