import React, { Component } from 'react';
import './todo.css';
import Header from '../components/header/header';

class todo extends Component {
    
    render() {
        return(
            <div className="container">
                <Header />
                <div className="main">
                    <form className="form-input">
                        <input type="text" placeholder="Add a to-do" className="todo-input" />
                        <input type="date" className="datePick" />
                        {/* <button type="selectDate"><i className="fas fa-calendar-alt"></i></button> */}
                        <button type="submit"><i className="fas fa-plus" title="click to add"></i></button>
                    </form>
                    <div className="tasksList">
                        <ul className="todo-list"></ul>
                        <button className="clearAll">Clear All</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default todo;