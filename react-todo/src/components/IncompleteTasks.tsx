export const IncompleteTasks = (props: any) => {
    const { Tasks, makeDone, removeTask } = props;
    return (
        <div className="incomplete-area">
            <p className="title">未完了のTODO</p>

            <ul>
                {Tasks.map((todo: string, index: number) => {
                    return (
                        <li key={todo} className="list-row">
                            <p>{todo}</p>
                            <button onClick={() => makeDone(index)}>完了</button>
                            <button onClick={() => removeTask(index)}>削除</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
