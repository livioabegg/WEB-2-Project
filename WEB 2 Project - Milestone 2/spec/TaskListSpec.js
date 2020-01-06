"use strict";

describe("TaskList", function() {
  var taskList;

  beforeEach(function() {
    taskList = new TaskList("title");
  });

  it("should return title set in constructor", function() {
    expect(taskList.getTitle()).toEqual("title");
  });
  
  it("check tostring of tasklist", function() {
	taskList.createTask("Task1");
    expect(taskList.toString()).toEqual("<p>title</p><p>Task1<br>false</p>");
  });

  it("adds a new element", function() {
    taskList.createTask('test');
    expect(taskList.tasks[0].title).toEqual('test');
  });

  it("can remove task from tasklist", function() {
    taskList.createTask('test');
	var task1 = taskList.tasks[0];
	taskList.removeTask(task1);
    expect(taskList.tasks).not.toContain(task1);
  });

  it("can not remove null from tasklist", function() {
	taskList.createTask('test');
    var lengthBefore = taskList.tasks.length;
    taskList.removeTask(null);
    expect(taskList.tasks.length).toEqual(lengthBefore);
  });

  describe("render", function() {
    it("renders an ul element", function() {

      expect(taskList.render()).toEqual('ul');
    });

    it("renders empty list when empty", function() {
      expect(taskList.render()).toBeEmpty();
    });
    it("renders tasks", function() {
      taskList.createTask('test task');
      console.log(taskList.render());
      expect(taskList.render().find('input[name=title]').val()).
        toBe('test task');
    });
  });

});
