import React from 'react';
import './Todo.css';
import firebase from './firebase';


function Todo(props){
    return(
        <div className = "todo">
            <li>
                {props.todo.todo}
            </li>
            <button onClick = {event => firebase.firestore().collection('todos').doc(props.todo.id).delete()}>Delete</button>
        </div>
    )
}

export default Todo;