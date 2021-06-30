import styled from 'styled-components';

const TodoItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    border: 1px solid black;
`;
const TodoContent = styled.div`
    text-decoration: ${props => props.$isDone && 'line-through'};
    color: ${props => props.$isDone && 'red'};
`;
const TodoButtonWrapper = styled.div``;
const Button = styled.button`
    padding: 4px;
    color: black;
    & + & {
        margin-left: 4px;
    }
`;

export default function TodoItem({ todo, handleRemoveClick, handleIsDoneClick }) {
    return (
        <TodoItemWrapper>
            <TodoContent $isDone={todo.isDone}>{todo.content}</TodoContent>
            <TodoButtonWrapper>
                <Button
                    onClick={() => {
                        handleIsDoneClick(todo.id);
                    }}
                >
                    {todo.isDone ? '未完' : '完成'}
                </Button>
                <Button
                    onClick={() => {
                        handleRemoveClick(todo.id);
                    }}
                >
                    刪除
                </Button>
            </TodoButtonWrapper>
        </TodoItemWrapper>
    );
}
