import { useState } from "react";
import "./styles.css"

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    'ああああ',
    'いいいいい'
  ]);

  const [completeTodos, setCompleteTodos] = useState([
    '完了済みタスク',
    'うううう'
  ]);

  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>

        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>

      </div>

      <div className="complete-area">
        <p className="title">完了済のTODO</p>

        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>

      </div>
    </>
  );
}
