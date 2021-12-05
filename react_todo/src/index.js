// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const getKey = () => Math.random().toString(32).substring(2);

// function Todo() {
//   const [items, setItems] = React.useState([
//     { key: getKey(), text: 'Learn JavaScript', done: false },
//     { key: getKey(), text: 'Learn React', done: false },
//     { key: getKey(), text: 'Get some good sleep', done: false },
//   ]);

//   const handleCheck = checked => {
//     const newItems = items.map(item => {
//       if (item.key === checked.key) {
//         item.done = !item.done;
//       }
//       return item;
//     });
//     setItems(newItems);
//   }

//   return (
//     <div className="panel">
//       <div className="panel-heading">
//         ⚛️ React ToDo
//       </div>
//       {items.map(item => (
//         <TodoItem
//           key={item.key}
//           item={item}
//           onCheck={handleCheck}
//         />
//       ))}
//       <div className="panel-block">
//         {items.length} items
//       </div>
//     </div>
//   );
// }

// function TodoItem({ item, onCheck }) {
//   const handleChange = () => {
//     onCheck(item);
//   }

//   return (
//     <label className="panel-block">
//       <input
//         type="checkbox"
//         checked={item.done}
//         onChenge={handleChange}
//       />
//       <span
//         className={classNames({
//           'has-text-grey-light': item.done
//         })}
//       >
//         {item.text}
//       </span>
//     </label>
//   );
// }

// function App() {
//   return (
//     <div className="container is-fluid">
//       <Todo />
//     </div>
//   );
// }

// const root = document.getElementById('root');
// ReactDOM.render(<App />, root);

// // function Tab({ onChange }) {
// //   return (
// //     <ul>
// //       <li onClick={() => onChange(1)}>React</li>
// //       <li onClick={() => onChange(2)}>Vue.js</li>
// //       <li onClick={() => onChange(3)}>Angular</li>
// //     </ul>
// //   );
// // }

// // function App() {
// //   const [tab, setTab] = React.useState(1);

// //   const handleChange = val => setTab(val);

// //   return (
// //     <>
// //       <Tab onChange={handleChange} />

// //       <div hidden={tab !== 1}>
// //         A JavaScript library for building user interfaces
// //       </div>
// //       <div hidden={tab !== 2}>
// //         The Progressive JavaScript Framework
// //       </div>
// //       <div hidden={tab !== 3}>
// //         One framework. Mobile &amp; desktop.
// //       </div>
// //     </>
// //   );
// // }

// // const root = document.getElementById('root')
// // ReactDOM.render(<App />, root)
