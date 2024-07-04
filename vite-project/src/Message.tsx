
// PascalCasing - Capitalize the first letter: ie. CamelCase
function Message() {
    // This syntax is JSX: JavaScript XML - Meaning this will be converted into javascript. 
    const name = 'Savanna';

    // If name is not empty
    if (name)
        return <h1>Hello {name}</h1>

    // If name is empty
    return <h1>Hello World!</h1>;
}

export default Message;