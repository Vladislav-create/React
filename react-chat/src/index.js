import React from 'react';
import ReactDOM from 'react-dom/client';
import { Message } from './components/Message';
import { Test } from './components/test/test';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Test props1={23}
      props2="5"
      props3={false}
      props4={(arg) => console.log("click", arg)}
      props5={[1, 2, 3]}
      films={[
        { title: 'Witcher', year: 2003 },
        { title: 'Witcher-2', year: 2015 }
      ]}
    />
    <Message message="Соообщение из ДЗ №1" />
  </React.StrictMode>,
  
);
