import React, {useState} from 'react';

const Hooks = (props) => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>现在的count是{count}</p>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )
}
export default Hooks;