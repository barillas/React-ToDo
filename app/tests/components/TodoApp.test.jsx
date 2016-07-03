var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp')

describe('Todo App', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add to do when the todo states on handleAddTodo', () => {

    var todoText = 'test test'

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  })

})
