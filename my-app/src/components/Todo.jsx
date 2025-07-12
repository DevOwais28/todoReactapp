import React, { useEffect, useState, useRef } from 'react'
import './todo.css'
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../../firebase.js';
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, onSnapshot, query, where, doc, deleteDoc, updateDoc } from "firebase/firestore";
import Signout from './signout.jsx';


const Todo = () => {
  let uid = useRef(null)
  const navigate = useNavigate();
  const [todo, setTodo] = useState([])
  let inputRef = useRef(null)
 
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        uid.current = user.uid;
        console.log(uid);

        const q = query(collection(db, "todos"), where("id", "==", uid.current));

        onSnapshot(q, (querySnapshot) => {
          const todos = []
          querySnapshot.forEach((doc) => {
            // console.log(doc.data())
            todos.push({
              ...doc.data(),
              id: doc.id // document id use to delete or update document
            });
          });
          setTodo(todos)

        });
        // ...
      } else {
        navigate("/signup")
        // User is signed out
        // ...
      }
    });
  }, [navigate])


  let AddTodo = async () => {
    if (inputRef.current.value) {
      const docRef = await addDoc(collection(db, "todos"), {
        value: inputRef.current.value,
        id: uid.current   // user id to print all todos of login user

      });
      console.log(docRef.id);

      inputRef.current.value = ''
    }

  }
  console.log(todo);

  let Updatetodo = async (val, id) => {
    let newTodo = prompt('Enter Updated Todo', val)
    await updateDoc(doc(db, "todos", id), {
      value: newTodo
    });
  }
  let deletetodo = async (id) => {

    await deleteDoc(doc(db, "todos", id)
      // setTodo(newTodo)
    )
  }
  return (
    <>
    <Signout />
    <div className="todo-container">
      <h2>To-Do List</h2>
      
      <input ref={inputRef} type="text" id="todo-input" placeholder="Enter a task..." />
      <button onClick={AddTodo} >Add</button>
            <ul id="todo-list">
        {todo.map((item, index) => {
          return <li key={index}>{item.value}
            <div className="actions">
              <button className="edit-btn" onClick={() => Updatetodo(item.value, item.id)}>✏️</button>
              <button className="delete-btn" onClick={() => deletetodo(item.id)}>🗑️</button>
            </div>
          </li>
        })}
      </ul>
    </div>
    
   </>
  )
}

export default Todo


