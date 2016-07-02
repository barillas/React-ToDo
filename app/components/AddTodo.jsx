var React = require('react');

var AddTodo = React.createClass({

    onSubmit: function(e) {
      e.preventDefault();

      var newTodo = this.refs.addTodo.value

      if (newTodo.length > 0) {

        this.props.onAddTodo(newTodo)

      }

    },

    render: function() {

        return (
          <div>

            <form ref ="addTodoForm" onSubmit = {this.onSubmit}>
              <input type="text" ref="addTodo" placeholder="What do you need to do?"></input>
              <button className ="button">Add To do</button>

            </form>


          </div>

        )
    }

})

module.exports = AddTodo
