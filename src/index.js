import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { Button, TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import ButtonAppBar from "./titleBar"


function fetchTodos() {
  return [
    {
      id: 1,
      title: "看花",
      completed: false,
    },
    {
      id: 2,
      title: "看草",
      completed: false,
    },
    {
      id: 3,
      title: "看代码",
      completed: true,
    },
  ];
}

function TodoItem(props) {
  const { completed, title, onDelect, onToggle } = props
  return (
    <ListItem divider>
      <Checkbox
        checked={completed}
        onChange={onToggle}
      />
      <ListItemText
        primary={title}
        style={{ textDecoration: completed ? "line-through 2px" : "none" }}
      />
      <Button onClick={onDelect}>
        <DeleteForeverIcon style={{ color: "red" }} />
      </Button>
    </ListItem>
  )
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());
  const [title,setTitle]=useState("")
  const [id, setId] = useState(4)

  const handleBtnClick=()=>{
    const newTodoList=todos.concat({id:id,title:title, completed: false})
    setId((id)=>++id)
    setTodos(newTodoList)
    console.log(newTodoList)
  }
  return (
    <>
      <ButtonAppBar />
       <div>
        <TextField
          style={{marginTop:20,marginLeft:50}}
          label="事项"
          variant="outlined"
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <Button
          style={{marginTop:40}}
          variant="outlined" 
          color="primary"
          onClick={()=>{
            handleBtnClick()
          }}
        >
          添加
        </Button>
       </div>
      <List style={{ width: 500, marginLeft: 20 }}>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              onDelect={() => {
                setTodos(todos.filter((x) => x.id !== todo.id))
              }}
              onToggle={() => {
                setTodos(todos.map((x) => {
                  return (
                    x.id === todo.id ? { ...x, completed: !x.completed } : x
                  )
                }))
              }}
            />
          )
        })}
      </List>
    </>
  )
}

//reactdom就是把一个react组件从一个真正的dom里卸载，或者渲染真正的dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(<App/>,document.getElementById('root'));