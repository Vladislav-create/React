import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
// import { Message } from './components/Message';
// import { Test } from './components/test/test';

// class ClassComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       films: ["film1", "film2", "film3"],
//       testObject: {
//         id: 11,
//       },
//     };
//   }

//   incriment = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   decriment = () => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };

//   addFilm = () => {
//     const film = 'new film'
//     this.setState({
//       films:[...this.state.films, film]
//     })
//   };

//   render() {
//     console.log(this.state);
//     const { count, films, testObject } = this.state;
//     return (
//       <div>
//         <button onClick={this.incriment}>Incriment</button>
//         <button onClick={this.decriment}>Decriment</button>
//         <button onClick={this.addFilm}>addFilm</button>
//         <div>
//           <h1>ClassComponent</h1>
//           <h1>
//             Count: <span>{count}</span>
//           </h1>
//         </div>
//         <hr></hr>
//         <div>
//           <h1>Фильмы: </h1>
//           <div>
//             {films.map((film) => (
//               <h1>{film}</h1>
//             ))}
//           </div>
//         </div>
//         <hr></hr>
//         <div>
//           <h1>testObject: </h1>
//           <div>
//             <h1>Свойство testObject: {testObject.id}</h1>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [films, setFilms] = useState(["Film 1", "Film 2", "Film 3"]);
  const [testObject, setTestObject] = useState({
    id: 1988,
  });

  useEffect(() => {
    console.log("Эффект1");
  }, []);

  useEffect(() => {
    console.log("Эффект3: count", count);
  }, [count]);

  useEffect(() => {
    console.log("Эффект4: Фильмы", films);
  }, [films]);

  const addFilm = () => {
    const film = "Новый фильм";
    setFilms([...films, film]);
  };

  const showTestObject = () => {
    setTestObject();
    console.log(testObject);
  };

  return (
    <div>
      <h1>FunctionComponent</h1>
      <hr></hr>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>incriment</button>
      </div>
      <hr></hr>
      <div>
        <h1>Фильмы:</h1>
        <button onClick={addFilm}>Добавить фильм</button>
        <div>
          {films.map((film) => (
            <h1>{film}</h1>
          ))}
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>{testObject.id}</h1>
      </div>
    </div>
  );
};

const MassageList = () => {
  const BOT_MESSAGE = { autor: "Таня", massage: "Я Май" };
  const ref = useRef();
  const [value, setValue] = useState("");
  const [massages, setMassages] = useState([BOT_MESSAGE]);

  useEffect(() => {
    ref.current?.focus()
  });

  useEffect(() => {
    console.log(ref)
    const lastMessage = massages[massages.length - 1];
    let timerId = null;

    if (massages.length && lastMessage?.autor == "Влад") {
      timerId = setTimeout(() => {
        setMassages([...massages, BOT_MESSAGE]);
      }, 5000);
    }
    // setMassages([...massages, BOT_MESSAGE]);
    return () => {
      clearInterval(timerId);
    };
  }, [massages]);

  const sendMassage = () => {
    if (value) {
      setMassages([...massages, { autor: "Влад", massage: value }]);
    }
  };

  return (
    <div>
      <h1>MassageList</h1>
      <input
        ref={ref}
        placeholder="Введите сообщение"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={sendMassage}>Send</button>
      <hr />
      {massages.map((massage) => (
        <div>
          <h2>{massage.autor}</h2>
          <h2>{massage.massage}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MassageList />
  // <FunctionComponent />
  // <React.StrictMode>

  //   {/* <ClassComponent /> */}
  //   {/* <Test props1={23}
  //     props2="5"
  //     props3={false}
  //     props4={(arg) => console.log("click", arg)}
  //     props5={[1, 2, 3]}
  //     films={[
  //       { title: 'Witcher', year: 2003 },
  //       { title: 'Witcher-2', year: 2015 }
  //     ]}
  //   /> */}
  //   {/* <Message message="Соообщение из ДЗ №1" /> */}
  // </React.StrictMode>
);
