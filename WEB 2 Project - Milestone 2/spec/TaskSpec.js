"use strict";

describe("Task", function() {
  var task;

  beforeEach(function() {
    task = new Task();
  });

  describe("basic object oriented features", function() {

    it("has a done property", function() {
      expect(task.done).toBeFalsy();
      task.done = true;
      expect(task.done).toEqual(true);
    });

    it("can set task to done", function() {
  	  task.setDone(true);
  	  expect(task.done).toBeTruthy();
  	});

    it("has a name property", function() {
      expect(task.title).toEqual("");
      task.title = 'test task';
      expect(task.title).toEqual('test task');
    });

    it("distinguishes objects from each other", function() {
      var task2 = new Task('new');
      expect(task2.title).not.toEqual(task.title);
      expect(task2).not.toEqual(task);
    });

    it("sets title via constructor" , function() {
      var task2 = new Task("title set");
      expect(task2.title).toEqual("title set");
    });

	it("should return title set in constructor", function() {
	  var task1 = new Task("Task1");
	  expect(task1.getTitle()).toEqual("Task1");
	});

	it("can change title of task", function() {
	  task.setTitle("Test Task");
	  expect(task.title).toEqual("Test Task");
	});

	it("check tostring of tasklist", function() {
		task.setTitle("Task1");
	  expect(task.toString()).toEqual("<p>Task1<br>false</p>");
	});

  });


  describe("render", function() {
    it("renders an li element", function() {
      var $markup = task.render();
      expect($markup).toEqual('li');
    });

    it("renders an empty input field", function() {
      var $markup = task.render();
      expect($markup.find('input[name=title]')).toHaveValue('')
    });

    it("renders an unchecked checkbox", function() {
      var $markup = task.render();
      expect($markup.find('input[name=done]')).not.toBeChecked();
    });

    it("renders an the title", function() {
      task.title = 'task title';
      var $markup = task.render();
      expect($markup.find('input[name=title]')).toHaveValue('task title');
    });

    it("checks the checkbox when done", function() {
      task.done = true;
      var $markup = task.render();
      expect($markup.find('input[name=done]')).toBeChecked();
    });

  });

});
