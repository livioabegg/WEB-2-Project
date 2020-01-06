"use strict";

var Task = function (title, done) {
    this.title = title;
    this.done = done;
};

Task.prototype.toString = function ( ) {
    var str = "<p>"+this.title + "<br>" + this.done+"</p>";
    return str;
};

Task.prototype.setDone = function (done) {
   this.done = done;
};

Task.prototype.setTitle = function (title) {
    this.title = title;
 };

Task.prototype.getTitle = function () {
    return this.title;
 };

 Task.prototype.getDone = function () {
    return this.done;
 };

