import React from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import Users from './components/Users/Users';

const DUMMY_USERS = [
  {
    id: "1234qwerty",
    name: "Jim"
  },
  {
    id: "2345qwerty",
    name: "James"
  },
  {
    id: "3456qwerty",
    name: "Kim"
  },
  {
    id: "4567qwerty",
    name: "Mike"
  },
];

// console.log("DUMMY_USERS", DUMMY_USERS)


function App() {
  return (
    <div>
      <AddUser />
      {/* <Users data={DUMMY_USERS}></Users> */}
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
