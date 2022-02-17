import React, {ChangeEvent, KeyboardEvent, MouseEventHandler} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string | null// need to fix any
    totalUsers: number // need to fix any
    onKeyPress: (e:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyDown={onKeyPress}
                />
                <div className={s.error}>{error}</div>
            </div>
            <button onClick={addUser} className={s.button}>add</button>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
