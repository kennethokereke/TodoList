import React, {useState} from 'react';

import './App.css';

import { Container, Button, Form, FormInput, Row, Col} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function Todo() {
  //Setup todo list
  const [todoList, settodoList] = useState([
    {text: 'kenneth is the best'},
    {text: 'kenneth is the best'},
    {text: 'kenneth is the best'}

  ]);

  //for the value
  const [value, setValue] = useState('')


  //hhandle submission of form
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  //Add a Todo
const addTodo = (text) => {
  const setUpdate = [...todoList, { text }]
  settodoList(setUpdate);

}

//delete a Todo

const deleteTodo = (todo) => {

  const deleteItem = todoList.filter(currentValue => (
   currentValue !== todo 
  ))

  settodoList(deleteItem);

  console.log(todo)

}



  return (
    <Container>
        <h1>Kenneth Okereke Todo List</h1>
       
         
            <Form onSubmit={handleSubmit}>
              <FormInput 
              placeholder="enter Task"
              onChange={keyboardStrock => setValue(keyboardStrock.target.value)}
              value={value}
              />
              <Button theme="success" type="submit">Enter</Button>

            </Form>
            <Container>
          <Container className="TodoList" >
            <Row>
              <Col  sm="12" lg="6">
              {todoList.map((todo, index) => (
              <span key={index}>
                <p>{todo.text}</p>
                <Container>
                  <Row>
                    <Col  sm="12" lg="6" >
                    <Button theme="success" onClick={() => deleteTodo(todo)}>Delete</Button>
                    </Col>
                  </Row>
                </Container>
                
                
              </span>
            ))}
              </Col>
            </Row>
           
          </Container>


         
        </Container>
        </Container>

   
    
    
    
  );
}

export default Todo;
