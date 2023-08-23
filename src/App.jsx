import { useState } from "react";
import style from "./components/content/content.module.css";
import { Button } from "./components/button";
import { clsx } from "clsx";
import { Aside } from "./components/aside/aside";
import { nanoid } from "nanoid";
import { Content } from "./components/content/content";

function App() {
  return (
    <div className="bg-slate-950 w-screen min-h-screen  flex">
      <Aside />
      <Content />
    </div>
  );
}

export default App;

// const [value, setValue] = useState('');
// const [tasks, setTasks] = useState([]);

// const onSetTask = () => {
//    setTasks([...tasks, {id: nanoid(), name: value, isDone: false}]);
// }
// const deleteTask = (i) => {
//    return setTasks(tasks.filter(elem => {
//       return elem.id != i;
// }))}
// const resalt = tasks.map((elem) => {
//    return <div className=' mx-auto w-fit' key={elem.id}>
//       <p className=' inline-block pt-3'>{elem.name} </p>
//       <Button text='done'  />
//       <Button text='edit' />
//       <Button text='delete'  onSetTask={() => deleteTask(elem.id)} />

//    </div>
// })
// return (
// <div className=' bg-gray-800 w-screen h-screen'>
//    <div className=' w-fit pt-4 f mx-auto'>
//    <input type="text" placeholder='Enter task' value={value} onChange={ e => setValue(e.target.value) } className=' bg-gray-800 outline-none border-b border-amber-300 text-gray-400'/>
//    <Button text='add task' onSetTask={onSetTask}  />
//    </div>
//    <div className=' mx-auto'>
//       {resalt}
//    </div>
// </div>

// )
// }

// const users = [
//    {id: id(), name: 'user1',
//       surn: 'surn1', age: 30, },
//    {id: id(), name: 'user2',
//       surn: 'surn2', age: 31,},
//    {id: id(), name: 'user3',
//       surn: 'surn3', age: 32,},
// ];

// const [arrUsers, setArrUsers] = useState(users);

// let editProd = (e, field, id) => {
//    setArrUsers(arrUsers.map(i => {
//       if (i.id === id) {
//          i[field] = e.target.value;
//       }
//       return i;
//    }))
// };

// const res = arrUsers.map(e => {
//    return <User
//       key={e.id}
//       id={e.id}
//       name={e.name}
//       surn={e.surn}
//       age={e.age}
//       editProd={editProd}
//       />
// });

// return <div>
//       <table>
//          <tbody>
//          {res}
//          </tbody>
//       </table>
//    </div>

// function App() {
//    const arrNum = [2,3,4,5,6,7];
//    const [num, setNum] = useState(arrNum);
//    const [value, setValue] = useState('');
//    const [index, setIndex] = useState('');
//    const res =  num.map((elem, i) => {
//       return <div>
//          <li key={i} c
//          onDoubleClick={() => {setValue(elem), setIndex(i)}}>{elem}</li>
//          <button onClick={() => deleteNum(i)}>delete</button>
//       </div>
//   });
//   function handleCHange(i) {
//    const copy = Object.assign([], num);
//    copy[i] = copy[i] ** 2;
//     setNum(copy);
//   }
//   const deleteNum = (index) => {
//    setNum([...num.slice(0, index), ...num.slice(index + 1)]);
//   }
//   function changeNum( v, i) {
//    setNum([...num.slice(0,i), v, ...num.slice(i + 1)]);
//    console.log(v, i);
//   }

//   return <div>
//       <input type="text" value={value} data-index={index} onChange={(e) => setValue(e.target.value)} onBlur={() => changeNum(value, index)}/>
//       <button onClick={() => setNum([...num.reverse()])}>btn</button>
//       <ul>
//          {res}
//       </ul>
//    </div>
// }

// function App() {
//    function getId(length = 16) {
//       let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

//       let res = '';

//       for (let i = 0; i <
//          length; i++) {
//          res += chars[Math.floor(Math.random()
//              * chars.length)];
//       }

//       return res;
//    }
//    const initNotes = [
//       {
//          id: 'GYi9G_uC4gBF1e2SixDvu',
//          prop1: 'value11',
//          prop2: 'value12',
//          prop3: 'value13',
//       },
//       {
//          id: 'IWSpfBPSV3SXgRF87uO74',
//          prop1: 'value21',
//          prop2: 'value22',
//          prop3: 'value23',
//       },
//       {
//          id: 'JAmjRlfQT8rLTm5tG2m1L',
//          prop1: 'value31',
//          prop2: 'value32',
//          prop3: 'value33',
//       },
//    ];

//    const [items, setItem] = useState(initNotes);
//    const [value1, setValue] = useState('');
//    const res = items.map(elem => {
//       return <>
//             <li key={elem.id}>
//                <span>{elem.prop1} </span>
//                <span>{elem.prop2} </span>
//                <span>{elem.prop3} </span>
//                <button onClick={() => setValue(elem.prop1)}>delete</button>
//             </li>

//          </>
//    });
//    let doSmth = (id) => {
//       setItem(items.filter(e => e.id !== id));
//    };
//   return <div>
//    <input type="text" value={value1} onChange={(e) => setValue(e.target.value)} />
//    <input type="text"  />
//    <input type="text"  />
//       <button onClick={() => setItem([
//          ...items,
//          {
//             id: getId(),
//             prop1: `value1-${items.length + 1}1`,
//             prop2: `value2-${items.length + 1}2`,
//             prop3: `value3-${items.length + 1}3`
//       }])}>
//          btn
//       </button>
//       <button onClick={() => setItem([
//          ...items,
//          {
//             id: getId(),
//             prop1: `${value1}-${items.length + 1}1`,
//             prop2: `value2${items.length + 1}2`,
//             prop3: `value3${items.length + 1}3`
//       }])}>
//          create
//       </button>
//       <ul>
//          {res}
//       </ul>
//   </div>

// }
