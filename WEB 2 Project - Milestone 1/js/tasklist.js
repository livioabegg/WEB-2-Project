"use strict";
var TaskList = function (title) {
	this.title = title;
	this.tasks = [];
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

TaskList.prototype.addTask = function (task) {
	this.tasks.push(task);
};

TaskList.prototype.removeTask = function (taskToRemove) {
    for( var i = 0; i < this.tasks.length; i++){
        if ( this.tasks[i] === taskToRemove) {
            this.tasks.splice(i, 1);
        }
    }
};

(function () {

})();
