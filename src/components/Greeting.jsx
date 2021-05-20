import React from 'react';

function Greeting({personName, age, favoriteColor}){
    let greeting = 'Hi, what is your name';

// argument in function signature is shorthand for...
// const {personName = 'Noname', age, favoriteColor}=props;
    if(personName){
        greeting = `Hello, ${personName}, ${age}, ${favoriteColor}`;
    }

    return <div className="bg-modern-white"> {greeting}!</div>;
}

Greeting.defaultProps = {
    personName: 'Joe Doe',
    favoriteColor: 'Orange',
    age: '27',
};

export default Greeting;