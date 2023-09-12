export const CompleteTasks = (props: any) => {
    const { completeTasks, onClickReturn } = props;
    return (
        <div className="complete-area">
            <p className="title">完了済のTODO</p>

            <ul>
                {completeTasks.map((todo: string, index: number) => {
                    return (
                        <li key={index} className="list-row">
                            <p>{todo}</p>
                            <button onClick={() => onClickReturn(index)}>戻す</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
