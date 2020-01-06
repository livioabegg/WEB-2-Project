"use strict";

var taskList;

$(function() {

  // code placed here will be executed each time the page
  // is rendered

  // create a tasklist to display
  taskList = new TaskList();
  taskList.createTask("Prepare soccer shoes");
  taskList.createTask("Prepare changing clothes");
  taskList.createTask("Meditate for maximum conentration");
  taskList.createTask("Win the game");
  //taskList.tasks[0].done = true;

  // TODO: add rendered markup ot the tasklist to the container #taskList
  $("#taskList").append(taskList.render());

  console.log('Application successfully initialized');

  $('#createTask').on("click", function(event) {
    event.preventDefault();
    var task = taskList.createTask('');
    $('#taskList ul').append(task.render());
  });

  $('#saveTasks').on("click", function(event) {
    //save all the information to the array
  });

  $("#taskList").on("click", "input:checkbox",function(event) {
	if($(this).prop('checked'))
	{
		var lielement = $(this).parent();
		$(this).parent().remove();
		$("#taskList ul").append(lielement);
		$(lielement).addClass("checked");
		$(lielement).hide();
		$(lielement).slideDown( "slow" );
		var index = $( "input:checkbox" ).index( this );
		taskList.tasks[index].done = true;
	}
	else
	{
		var lielement = $(this).parent();
		$(this).parent().remove();
		$("#taskList ul").prepend(lielement);
		//$(this).prop("checked", false);
		$(lielement).removeClass("checked");
		$(lielement).hide();
		$(lielement).slideDown( "slow" );
		//$(this).parent().slideUp();
		var index = $( "input:checkbox" ).index( this );
		taskList.tasks[index].done = false;
	}

  });


});
