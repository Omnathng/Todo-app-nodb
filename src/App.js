import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const divStyle = {
    background: 'linear-gradient(to right, #8EE4AF,#FECACA)',
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen w-auto container' style={divStyle}>
        <div className='flex flex-col rounded-lg bg-slate-50 p-5'>
          <h1 className='text-center text-lg font-bold text-green-600 mb-4' style={{ fontSize: '50px' }}>
            <span className='hover:text-red-600'>T</span>
            <span className='hover:text-red-600'>o</span>
            <span className='hover:text-red-600'>D</span>
            <span className='hover:text-red-600'>o</span>
            <span className='hover:text-red-600'>  L</span>
            <span className='hover:text-red-600'>i</span>
            <span className='hover:text-red-600'>s</span>
            <span className='hover:text-red-600'>t</span>
          </h1>

          <div className="relative rounded-full bg-white shadow-md">
            <input
              type="text"
              className="w-full h-10 rounded-full pl-4 pr-10 focus:outline-none"
              placeholder="Enter text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="absolute right-0 top-0 h-full w-10 text-danger hover:text-red-500 flex items-center justify-center rounded-r-full"
              onClick={addTodo}
            >
              <FontAwesomeIcon icon={faPlus} className="text-red-600" />
            </button>
          </div>

          {todos.length > 0 ? (
            <ul>
              <h2>ToDo :</h2>
              {todos.map((todo, index) => (
                <li key={index} className='text-green-700 '>
                  <span style={{ marginLeft: "40px" }} className='hover:text-red-700'>{todo}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-green-700 hover:text-red-700'>There is nothing to display</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
