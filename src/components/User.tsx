import React, { useState } from 'react';

interface UserProps {
    name: string;
}

const User: React.FC<UserProps> = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <h2>Name: {name}</h2>
            <h3>Location: Delhi</h3>
            <h4>Contact: 9858909858</h4>
        </div>
    );
}

export default User;