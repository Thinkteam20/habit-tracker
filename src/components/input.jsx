import React, { memo } from "react";
// Memo = PureComponent

const input = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };
    return (
        <form ref={formRef} className='habit-form' onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type='text'
                // onChange={handleChange}
                placeholder='please enter your habit'
            />
            <button className='input-button'>ADD</button>
        </form>
    );
});

export default input;
