import { useState } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
const MyApp = styled.div`
    margin: auto;
    width: 60%;
`;
function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            content: 'AAA',
            isDone: false,
        },
        {
            id: 2,
            content: 'BBB',
            isDone: false,
        },
    ]);
    const [value, setValue] = useState('');
    const handleInputChange = e => {
        setValue(e.target.value);
    };
    const handleAddClick = () => {
        setValue('');
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                content: value,
                isDone: false,
            },
        ]);
    };
    const handleRemoveClick = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const handleIsDoneClick = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id !== id) return todo;
                return {
                    ...todo,
                    isDone: !todo.isDone,
                };
            })
        );
    };
    return (
        <MyApp>
            <input type="text" placeholder="todo" value={value} onChange={handleInputChange} />
            <button onClick={handleAddClick}>Add</button>
            {todos.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleRemoveClick={handleRemoveClick}
                        handleIsDoneClick={handleIsDoneClick}
                    />
                );
            })}
        </MyApp>
    );
}

export default App;
