import { useState } from "react";
import "./styles.css"

export const App = () => {
  const [todoText, setTodoText] = useState('');

  const [incompleteTasks, setIncompleteTasks] = useState(['Task']);

  const [completeTasks, setCompleteTasks] = useState(['Done']);

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
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={() => addTask(todoText)}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>

        <ul>
          {incompleteTasks.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => removeTask(index)}>削除</button>
              </li>
            );
          })}
        </ul>

      </div>

      <div className="complete-area">
        <p className="title">完了済のTODO</p>

        <ul>
          {completeTasks.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </li>
            );
          })}
        </ul>

      </div>
    </>
  );
}
