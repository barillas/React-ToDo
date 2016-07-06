var React = require('react');

var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch'
import AddTodo from 'AddTodo';

var TodoApp = React.createClass({
    render: function() {
        return (

            <div>
                <div className="top-bar">
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li>
                                Built by
                                <a href="http://oscarbarillas.com">Oscar Barillas</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <h1 className="page-title">Todo App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-6">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

});

module.exports = TodoApp;
