var React = require('react');

var TodoApp = React.createClass({
  render: function () {
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
          }
          
        ]

        }

    },
    return (

      <div>
        To Do App.JSX
      </div>
    )
  }

});

module.exports = TodoApp;
