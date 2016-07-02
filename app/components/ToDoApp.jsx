var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApp = React.createClass({

    getInitialState: function() {
      return {
        todos: [
          {
            id: 1,
            text: "Walk the dog"
          }, {
            id: 2,
            text: "Clean the room"
          }, {
            id: 3,
            text: "Eat Fried Chicken"
          }, {
            id: 4,
            text: "Dave and Busters"
          }

        ]

        }

    },

    handleAddTodo: function (text) {
      alert('New Alert' + text)
    },
    render: function () {
    var {todos} = this.state
    return (

      <div>
        <div className= "text-center">
          <h1>Todo App</h1>
        </div>
        <TodoList todos ={todos} />
        <AddTodo onAddTodo = {this.handleAddTodo}/>
      </div>
    )
  }

});

module.exports = TodoApp;
