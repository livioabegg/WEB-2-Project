describe("Tasklist", function() {
  var tasklist;
  var task1;

  beforeEach(function() {
    task1 = new Task("Task1", false);

    tasklist = new TaskList("title");
    tasklist.addTask(task1);
  });

  it("can add new task to tasklist", function() {
    var task = new Task("title", false);
    tasklist.addTask(task);
    expect(tasklist.tasks).toContain(task);
  });

  it("check if task is in tasklist", function() {
    expect(tasklist.isTaskInArray(task1)).toBeTruthy();
  });

  it("should return title set in constructor", function() {
    expect(tasklist.getTitle()).toEqual("title");
  });

  it("check tostring of tasklist", function() {
    expect(tasklist.toString()).toEqual("<p>title</p><p>Task1<br>false</p>");
  });

  it("check if all tasks are in tasklist", function() {
    expect(tasklist.getTasks().length).toEqual(1);
    expect(tasklist.getTasks()).toEqual(tasklist.tasks);
  });

  it("check if other task with same title is not in tasklist", function() {
    // this object is never set to list
    var task2 = new Task("Task1", false);
    expect(tasklist.isTaskInArray(task2)).toBeTruthy();
  });

  it("can remove task from tasklist", function() {
    tasklist.removeTask(task1);
    expect(tasklist.tasks).not.toContain(task1);
  });

  it("check if task is NOT in tasklist", function() {
    var task2 = new Task("Test", true);
    expect(tasklist.isTaskInArray(task2)).toBeFalsy();
  });

  it("can not remove null from tasklist", function() {
    var lengthBefore = tasklist.tasks.length;
    tasklist.removeTask(null);
    expect(tasklist.tasks.length).toEqual(lengthBefore);
  });
});
