import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import todoData from "../../common/todoData";
import { useState } from "react";

export const TodoMain = () => {
  const [tasks, setTasks] = useState(todoData);

  //   const handleAddTask = (text) => {
  //     setTasks([
  //       ...tasks,
  //       {
  //         id: tasks.length++,
  //         text: text,
  //         done: false,
  //       },
  //     ]);
  //   };

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: todoData.length++,
        text: text,
        done: false,
      },
    ]);
  };

  //   const handleChangeTask = (task) => {
  //     setTasks(tasks.map((t) => {
  //         if (t.id === task.id) {
  //           return task;
  //         } else {
  //           return t;
  //         }
  //       })
  //     );
  //   };

  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  //   const handleDeleteTask = (taskId) => {
  //     setTasks(tasks.filter((t) => t.id !== taskId));
  //   };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <>
      <h1>todo project</h1>
      <TodoAdd onAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};
