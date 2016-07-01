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

})
