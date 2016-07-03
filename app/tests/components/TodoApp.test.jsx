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
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData =  {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});
    //Check that todos first item has been rendered false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //Call handle toggle with id
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });

  it('should toggle todo from completed to incompleted', () => {
    var todoData =  {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});
    //Check that todos first item has been rendered false
    expect(todoApp.state.todos[0].completed).toBe(true);
    //Call handle toggle with id
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });

})
