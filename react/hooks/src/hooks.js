import React, {useState } from 'react';
const Hooks = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>count{count}</p>
            <button onClick={() => setCount(count+1)}>add count</button>
        </div>
    )
}
export default Hooks;