import React, { Component, createRef } from "react";

export default class Input extends Component {
    // Ref
    formRef = createRef();
    inputRef = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // this.inputRef.current.value = "";
        this.formRef.current.reset();
    };

    /*↑ my original code.
    console.log(this.props.habits.map((habit) => habit.id));
     const newHabit = {
            id: "4",
            name: this.state.task,
            count: 0,
        };
        this.props.habits.push(newHabit);
        // console.log(this.props.habits);a
        this.props.onSubmit(this.props.habits);
         // handleChange = (event) => {
    //     // console.log(event.target.value);
    //     this.setState({ task: event.target.value });
    // };
    */

    render() {
        console.log("input");
        return (
            <form
                ref={this.formRef}
                className='habit-form'
                onSubmit={this.handleSubmit}
            >
                <input
                    type='text'
                    // onChange={this.handleChange}
                    ref={this.inputRef}
                    placeholder='please enter your habit'
                />
                <button type='submit' className='input-button'>
                    ADD
                </button>
            </form>
        );
    }
}
