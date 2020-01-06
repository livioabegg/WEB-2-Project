"use strict";

function TaskList(title) {
  this.id = null;
  this.tasks = [];
  this.title = title || "";
}

TaskList.prototype.size = function() {
  return this.tasks.length;
};

TaskList.prototype.createTask = function(title) {
  var _task = new Task(title);
  this.tasks.push(_task);
  return _task;
};


TaskList.prototype.render = function() {
  var item = $("<ul>");
  for (var i = 0; i < this.tasks.length; i++) {
      item.append(this.tasks[i].render());
  }
  
  return item;
};

TaskList.prototype.toString = function ( ) {
    var output = "<p>"+this.title+"</p>";
    for( var i = 0; i < this.tasks.length; i++){ 
        output += this.tasks[i].toString();
    }
    return output;
};

TaskList.prototype.getTitle = function ( ) {
	return this.title;
};

TaskList.prototype.getTasks = function ( ) {
	return this.tasks;
};

TaskList.prototype.isTaskInArray = function (task) {
    var taskIsInArray = false;
    for( var i = 0; i < this.tasks.length; i++){ 
        if ( this.tasks[i].title === task.title && this.tasks[i].done === task.done) {
            taskIsInArray = true;
        }
    }
    return taskIsInArray;
};

TaskList.prototype.removeTask = function (taskToRemove) {
    for( var i = 0; i < this.tasks.length; i++){ 
        if ( this.tasks[i] === taskToRemove) {
            this.tasks.splice(i, 1); 
        }
    }
};