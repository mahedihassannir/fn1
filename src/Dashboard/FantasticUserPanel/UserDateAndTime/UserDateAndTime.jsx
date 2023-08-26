import React, { useState } from 'react';

const UserDateAndTime = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time)
    let showDate = new Date().toDateString()

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }
    setInterval(updateTime, 1000)
    return (

        <div className='text-2xl font-bold p-4 '>
            <h1>{currentTime}</h1>
            <h2 className='mt-4'>{showDate}</h2>
        </div>
    );
};

export default UserDateAndTime;