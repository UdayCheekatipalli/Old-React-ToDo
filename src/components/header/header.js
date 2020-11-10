import React from 'react';
import './header.css';
import todoimg from '../../images/todo.png';

const header = () => {
    return (
        <header className="logo">
            <a href="http://localhost:3000/" rel="noreferrer" target="_blank">
                <img className="logo-img" src={todoimg} alt="todo" />
            </a>
            <h2>What To-Do..?</h2>
        </header>
    );
}

export default header;