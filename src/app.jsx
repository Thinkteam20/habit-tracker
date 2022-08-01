import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

export default class App extends Component {
    state = {
        habits: [
            { id: "1", name: "Reading", count: 0 },
            { id: "2", name: "Running", count: 0 },
            { id: "3", name: "Coding", count: 0 },
        ],
    };
    handleReset = () => {
        const habits = this.state.habits.map((habit) => {
            habit.count = 0;
            return habit;
        });
        this.setState({ habits });
    };
    // { id: Date.now(), name, count: 0 }
    handleAdd = (name) => {
        let habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
        this.setState({ habits });
    };
    handleIncrese = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits });
    };
    handleDecrese = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits });
    };
    handleDelete = (habit) => {
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
    };

    render() {
        console.log("app");
        return (
            <>
                <Navbar
                    totalCount={
                        this.state.habits.filter((item) => item.count > 0)
                            .length
                    }
                />

                <Habits
                    habits={this.state.habits}
                    onIncrese={this.handleIncrese}
                    onDecrese={this.handleDecrese}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}
                />
            </>
        );
    }
}
