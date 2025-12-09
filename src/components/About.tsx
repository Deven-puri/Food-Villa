import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is the React Web</h2>
            <UserClass name={"Deven"} location={"Delhi"} />
        </div>
    )
};

export default About;