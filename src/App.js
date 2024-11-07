import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);


  const handleSubmit = () =>{ 
    setInput('');
    setChecked(false);
    setTodos((todos) => 
      todos.concat({
        checked: checked,
        text: input,
        index: Math.floor(Math.random() * 900000),
      })
    );
  };

  const deleteTodo = (index) => setTodos(todos => todos.filter((i) => i.index !== index));

  

  const toggleChecked = (event, index) => {
    const isChecked = event.target.checked;
    setTodos((todos) => 
      todos.map((todo) =>
        todo.index === index ? { ...todo, checked: isChecked } : todo
      )
    );
  };

  return (
    <div className='bg-gray-400 flex justify-center items-start h-screen py-5'>
      <div className='bg-cyan-600 p-10 rounded-md'>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='rounded-lg p-4 border-none outline-none bg-slate-300 w-64 mr-3'/>
        <button className='rounded-md bg-gray-800 p-1 border-none outline-none text-white py-2 px-4 cursor-pointer' onClick={handleSubmit} >Add</button>
        <ul className='mt-12'>
          {todos.map(({text, index, checked}) => (
            <li key={index} className='rounded-md list-none flex justify-between items-center bg-teal-400 py-2 px-4 m-3 font-sans'>
              <input type="checkbox" onChange={(e) => toggleChecked(e, index)}/>
              <span style={{ textDecoration: checked? 'line-through': 'none' }}>{text}</span>
              <button className='rounded-md bg-gray-800 p-1 border-none outline-none text-white py-1 px-2 cursor-pointer' onClick={() => deleteTodo(index)} disabled={checked}> Delete </button>
            </li>
          ))}
        </ul> 
      </div>
    </div>
  );
}


export default App;
