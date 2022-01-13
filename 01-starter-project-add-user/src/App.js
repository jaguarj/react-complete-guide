import React, { useState, Fragment } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const testUsersList = [
	{
		id: Math.random().toString(),
		age: 32,
		name: "Mac"
	},
	{
		id: Math.random().toString(),
		age: 20,
		name: "Kim"
	}
];

function App() {

 const [usersList, setUsersList] = useState(testUsersList);

 const addUserHandler = (userName, userAge) => {
	setUsersList((prevUsersList) => {
		return [...prevUsersList, {id: Math.random().toString(), name: userName, age: userAge}];
	});
 };

	return (
		<Fragment>
			<AddUser onAddUser={addUserHandler}/>
			<UsersList userDataList={usersList}/>
		</Fragment>
		

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
