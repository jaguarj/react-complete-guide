import React, {useState} from 'react';

import './NewUserForm.css';

const NewUserForm = (props) => {
    console.log("Inside NewUserForm", props);
    // 2. Submtit on button click to add a new user. WIP.
    // 3. Clear form on submit.
    // 4. Add new user to list.

    const [addEnteredUser, setAddEnteredUser] = useState('');
    const [addEnteredUserAge, setAddEnteredUserAge] = useState('');
    // Pick here tomorrow from when you left off. Compare CourseInput.js to this file.

    const enteredUser = (e) => {
        console.log("e.t.v", e.currentTarget.value)
        if (e.currentTarget.value.trim().length === 0) {
            alert("user is left blank...");
            return
        };

        setAddEnteredUser(e.target.value)
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("I see submit button clicked!", e.target.value)
        // if (!addEnteredUser) {
        //     console.log("I see no value for new user.", addEnteredUser);
        //     // I should open a waring modal to show no user has been added.
        //     alert("user is left blank...");
        //     return
        // }
        props.addNewUserPayload(addEnteredUser);
    };

   
    return (
        <div className="user-form">
           <form id="add_new_user" onSubmit={formSubmitHandler}>
               <label>Add New User</label>
               <input type="text" onChange={enteredUser}/>
               <label>Age</label>
               <input type="text" onChange={enteredUser}/>
           </form>
           <button type="submit">Add New User</button>
        </div>
    )
};

export default NewUserForm;