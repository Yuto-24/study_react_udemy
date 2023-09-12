export const InputTodo = (props: any) => {
    const { todoText, onChange, addTask, disabled } = props
    return (
        <div className="input-area">
            <input disabled={disabled} type="text" placeholder="TODOを入力" value={todoText} onChange={onChange} />
            <button disabled={disabled} onClick={() => addTask(todoText)}>追加</button>
        </div>
    );
}
