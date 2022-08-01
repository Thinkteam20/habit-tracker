import React, { Component } from "react";

export default class Habit extends Component {
    // ** 부모로부터 받은 state를 보여주기만하는 클라스 컴포넌트!*****
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
        // this.props.habit = 각각의 해당하는 habit들이 인자로 보내준다!
    };
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        console.log("habit");
        const { name, count } = this.props.habit;

        return (
            <li className='habit'>
                <span className='habit-name'>{name}</span>
                <span className='habit-count'>{count}</span>
                <button
                    className='habit-button habit-increase'
                    onClick={this.handleIncrement}
                >
                    <i className='fa-solid fa-square-plus'></i>
                </button>
                <button
                    className='habit-button habit-decrease'
                    onClick={this.handleDecrement}
                >
                    <i className='fa-solid fa-square-minus'></i>
                </button>
                <button
                    className='habit-button habit-delete'
                    onClick={this.handleDelete}
                >
                    <i className='fa-solid fa-trash'></i>
                </button>
            </li>
        );
    }
}
