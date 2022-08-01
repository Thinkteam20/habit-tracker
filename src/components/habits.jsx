import React, { Component } from "react";
import Habit from "./habit";
import Input from "./input";

export default class Habits extends Component {
    handleIncrement = (habit) => {
        // // console.log(`handleIncrement ${habit.count}`);
        // // habit.count++;
        // // this.setState(this.state);
        // const habits = [...this.props.habits];
        // const index = habits.indexOf(habit);
        // habits[index].count++;
        // // this.setState({ habits });
        this.props.onIncrese(habit);
    };

    handleDecrement = (habit) => {
        // console.log(`handleDecrement ${habit.name}`);
        // const habits = [...this.props.habits];
        // const index = habits.indexOf(habit);
        // const count = habits[index].count - 1;
        // habits[index].count = count < 0 ? 0 : count;
        this.props.onDecrese(habit);
    };

    handleDelete = (habit) => {
        // console.log(`handleDelete ${habit.name}`);
        // // let habits = [...this.state.habits];
        // // const idx = habits.indexOf(habit);
        // // habits = habits.filter((el) => el.id !== habit.id);
        // // console.log(habits);
        // // this.setState({ habits });
        // const habits = this.props.habits.filter((item) => item.id !== habit.id);
        // // console.log(typeof habits);
        // // console.log(typeof this.state.habits);
        this.props.onDelete(habit);
    };

    handleAdd = (name) => {
        this.props.onAdd(name);
    };

    render() {
        console.log("habits");
        return (
            <>
                <Input onAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map((habit) => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
                <button className='reset-button' onClick={this.props.onReset}>
                    Reset All
                </button>
            </>
        );
    }
}
