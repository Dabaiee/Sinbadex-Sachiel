import React from 'react';

// Define the props type
type GreetingProps = {
    name: string;
    greeting?: string; // Optional prop
};

// Functional component using TypeScript
const Greeting: React.FC<GreetingProps> = ({ name, greeting = "Hello" }) => {
    return <h1>{greeting}, {name}!</h1>;
};

export default Greeting;