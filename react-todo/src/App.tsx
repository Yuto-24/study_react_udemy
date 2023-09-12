import { useState } from "react";
import "./styles.css"
import { InputTodo } from './components/InputTodo'
import { IncompleteTasks } from './components/IncompleteTasks'
import { CompleteTasks } from './components/CompleteTasks'

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTasks, setIncompleteTasks] = useState<string[]>([]);
  const [completeTasks, setCompleteTasks] = useState<string[]>([]);

  const onChangeTodoText = (event: any) => setTodoText(event.target.value);

  const addTask = (taskText = '', isIncomplete = true) => {
    if (taskText === '') return;

    if (isIncomplete === true) {
      const newTasks = [...incompleteTasks, taskText];
      setIncompleteTasks(newTasks);
    } else {
      const newTasks = [...completeTasks, taskText];
      setCompleteTasks(newTasks);
    }
    setTodoText('');
  }

  const removeTask = (index: number, isIncomplete = true) => {
    if (isIncomplete) {
      const newTasks = [...incompleteTasks];
      newTasks.splice(index, 1);
      setIncompleteTasks(newTasks);
    } else {
      const newTasks = [...completeTasks];
      newTasks.splice(index, 1);
      setCompleteTasks(newTasks);
    }
  }

  const onClickComplete = (index: number) => {
    removeTask(index);
    addTask(incompleteTasks[index], false);
  }

  const onClickReturn = (index: number) => {
    removeTask(index, false);
    addTask(completeTasks[index], true);
  }

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        addTask={addTask}
        disabled={incompleteTasks.length >= 5}
      />

      {incompleteTasks.length >= 5 && <p style={{ color: 'red' }}>登録できるタスクは5個までです。消化してください</p>}

      <IncompleteTasks
        Tasks={incompleteTasks}
        makeDone={onClickComplete}
        removeTask={removeTask}
      />

      <CompleteTasks
        completeTasks={completeTasks}
        onClickReturn={onClickReturn}
      />

    </>
  );
}
