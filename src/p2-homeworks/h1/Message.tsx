import React from 'react'



type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props:messageDataType) {
    return (
        <div>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>
            <div>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
