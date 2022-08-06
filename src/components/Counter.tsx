import React from 'react';
import './Counter.scss';

const Counter = ({
    id,
}: {
    id: string,
}) => {
    const [count, setCount] = React.useState(null); // count is null when unitialized
    const updateCounter = React.useCallback(
        async () => {
            const response = await fetch(`http://localhost:8080/count/${id}`);
            const newCount = await response.json();
            setCount(newCount);
        },
        [id],
    );
    React.useEffect(
        () => {
            updateCounter();
        },
        [updateCounter],
    );
    return (
        <button
            className='Counter'
            onClick={updateCounter}
        >
            <div className='count-wrapper'>
                <span className='count'>{count}</span>
            </div>
            <div className='label'>
                UPDATE
            </div>
        </button>
    );
};

export default Counter;