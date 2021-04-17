import React, {useState, useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import firebase from './firebase';

function App() {

   const [todos, setTodos] = useState([]);
   const [input, setInput] = useState('');

   useEffect(()=>{
    // this code loads when app.js loads as our dependency is []
    firebase.firestore().collection("todos").orderBy('timeStamp','desc').onSnapshot(snapshot => {

      setTodos(snapshot.docs.map(doc => 
        ({ 
          id: doc.id ,
          todo : doc.data().text,
        })
        ))  
     })
   },[])

   // todos useState will look like this:
   // id : kdnkmdcmdck22me
   // todo : 'go for shopping'


    function onSubmitTodo(event){
      event.preventDefault();

      firebase.firestore().collection("todos").add({
        text : input,
        timeStamp : firebase.firestore.FieldValue.serverTimestamp()
      })
      // setTodos([...todos, input]);
      setInput('');
    }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={onSubmitTodo}>
        <input
          required
          value = {input}
          placeholder = "Enter your item here!!"
          onChange = {(event) => setInput(event.target.value)}
          ></input>
        <button 
          style = {{fontSize: "large" , padding: "10px", backgroundColor: "black", color: "white", cursor : "pointer"}} 
          type="submit">Add</button>
      </form>
      
      <ul>{
        todos.map( (item,index) => (
            <Todo key = {index} todo = {item} />
        ))}

       {/* todo/item  will look like this:
       id : kdnkmdcmdck22me
        todo : 'go for shopping' */}

      </ul>
    </div>
  );
}

export default App;
