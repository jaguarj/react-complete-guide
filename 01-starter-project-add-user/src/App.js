import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const DUMMY_USERS = [
  {
    id: "1234qwerty",
    age: 34,
    name: "Jim"
  },
  {
    id: "2345qwerty",
    age: 30,
    name: "James"
  },
  {
    id: "3456qwerty",
    age: 23,
    name: "Kim"
  },
  {
    id: "4567qwerty",
    age: 10,
    name: "Mike"
  },
];

function App() {
 const [usersList, setUsersList] = useState([]);
 const addUserHandler = (userName, userAge) => {
  setUsersList((prevUsersList) => {
    return [...prevUsersList, {id: new Date(), name: userName, age: userAge}];
  });
 };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList userDataList={usersList} />
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
