import React, { PureComponent, createRef } from "react";

export default class Input extends PureComponent {
    // Ref
    formRef = React.createRef();
    inputRef = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    };

    render() {
        console.log("input");
        return (
            <form
                ref={this.formRef}
                className='habit-form'
                onSubmit={this.handleSubmit}
            >
                <input
                    ref={this.inputRef}
                    type='text'
                    // onChange={this.handleChange}
                    placeholder='please enter your habit'
                />
                <button className='input-button'>ADD</button>
            </form>
        );
    }
}
