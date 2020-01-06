"use strict";

function Task(title) {
  this.done = false;
  this.title = title || "";
}

Task.prototype.render = function() {
  var output;
  var checkbox;
  var inp;

  if (!this.done)  {
    checkbox = $("<input> ")
      .attr("type", "checkbox")
      .attr("name", "done")
      .attr("value", this.title);
  }
  else {
    checkbox = $("<input> ")
      .attr("type", "checkbox")
      .attr("name", "done")
      .attr("value", this.title)
      .prop("checked", true);
  }

  if(this.title === "") {
    inp = $("<input>")
      .attr("type", "text")
      .attr("name", "title")
      .val("");
  }
  else {
    inp = $("<input>")
      .attr("type", "text")
      .attr("name", "title")
      .val(this.title);
  }

  var item = $("<li>").append(checkbox, inp);

  return item;
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