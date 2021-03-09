import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export function todos(){
    return (
        this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ))
    );
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};