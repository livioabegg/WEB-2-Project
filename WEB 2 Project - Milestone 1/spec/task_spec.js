describe("Task", function() {
  var task

  beforeEach(function() {
    task = new Task("Task1", false);
  });

  it("can change title of task", function() {
    task.setTitle("Test Task");
    expect(task.title).toEqual("Test Task");
  });

  it("should return done set in constructor", function() {
    expect(task.getDone()).toBeFalsy();
  });

  it("check tostring of tasklist", function() {
    expect(task.toString()).toEqual("<p>Task1<br>false</p>");
  });

  it("should return done set in constructor", function() {
      expect(task.getDone()).toBeFalsy();
  });

  it("can set task to done", function() {
    task.setDone(true);
    expect(task.done).toBeTruthy();
  });

  it("should return title set in constructor", function() {
    expect(task.getTitle()).toEqual("Task1");
  });
});
