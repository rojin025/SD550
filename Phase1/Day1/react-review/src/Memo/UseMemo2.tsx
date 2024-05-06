import React, { useState, useMemo } from "react";

// Task interface
interface Task {
  id: number;
  description: string;
  completed: boolean;
}

// Parent component rendering a list of tasks
const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: "Task 1", completed: false },
    { id: 2, description: "Task 2", completed: true },
    { id: 3, description: "Task 3", completed: false },
  ]);

  // Compute the total number of completed tasks and memoize the result
  const completedTasksCount = useMemo(() => {
    console.log("Computing completed tasks count");
    return tasks.filter((task) => task.completed).length;
  }, [tasks]);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.description}</span>
          </li>
        ))}
      </ul>
      <p>Total Completed Tasks: {completedTasksCount}</p>
    </div>
  );
};

export default TaskList;
