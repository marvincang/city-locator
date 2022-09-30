import { useEffect, useState } from "react";

const Time = (props) => {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
    
        return () => {
            clearInterval(interval);
        }
    }, [time])
    

    return (
        <div>
            <h2>
                Today is {time.toDateString()} 
            </h2>
            <h2>
                Current time is {time.toLocaleTimeString()}
            </h2>
        </div>
    )
}

export default Time;