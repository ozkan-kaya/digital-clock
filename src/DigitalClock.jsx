import React, {useState, useEffect} from "react";

export default function DigitalClock() {

    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(intervalID);
        }

    }, []);

    function formatTime() {
        let hours = padZero(formatHour(time.getUTCHours() + 3));
        let minutes = padZero(time.getUTCMinutes());
        let seconds = padZero(time.getUTCSeconds());

        return `${hours}:${minutes}:${seconds}`
    }

    function formatHour(hours) {
        if (hours >= 24) {
            return (hours - 24);
        }
        return hours;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}