var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo')

describe('Add Todo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo if valid text entered', () => {
    var todoText = "Hello"
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);

  });

  it('should not call onAddTodo if empty string', () => {
    var todoText = ""
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });

})
