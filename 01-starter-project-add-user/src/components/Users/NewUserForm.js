import React, {useState} from 'react';

import './NewUserForm.css';

const NewUserForm = (props) => {
    console.log("Inside NewUserForm", props);
    // 1. Be able to capture new user by name value.
    // 2. Submtit on button click to add a new user.
    // 3. Clear form on submit.
    // 4. Add new user to list.

    const [addEnteredUser, setAddEnteredUser] = useState('')

    const enteredUser = (e) => {
        console.log("e.target.value", e.target.value)
        setAddEnteredUser(e.target.value)
    };

    const addNewUserSubmitButton = (e) => {
        console.log("I see submit button clicked!")
        if (!addEnteredUser) {
            console.log("I see no value for new user.", addEnteredUser);
            // I should open a waring modal to show no user has been added.
            alert("user is left blank...");
            return
        }
        props.addNewUserPayload(addEnteredUser)
    };

   
    return (
        <div className="user-form">
           <form id="add_new_user">
               <label>Add New User</label>
               <input onChange={enteredUser}/>
           </form>
           <button onClick={addNewUserSubmitButton}>Add New User</button>
        </div>
    )
};

export default NewUserForm;