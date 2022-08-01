import React, { Component } from "react";
import Habit from "./habit";
import Input from "./input";

export default class Habits extends Component {
    handleIncrement = (habit) => {
        this.props.onIncrese(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrese(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleAdd = (name) => {
        this.props.onAdd(name);
    };

    render() {
        // console.log("habits");
        return (
            <div className='habits'>
                <Input onAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map((habit) => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            // count={habit.count}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
                <button className='reset-button' onClick={this.props.onReset}>
                    Reset All
                </button>
            </div>
        );
    }
}
