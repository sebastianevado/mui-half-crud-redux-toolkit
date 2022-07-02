import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Container, CardContent, Button, Typography } from "@mui/material";
import './TaskForm.css';
function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const navigate = useNavigate();
  const { id } = useParams();

  function handleChange(event) {
    event.preventDefault();
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (id) {
      dispatch(editTask(task));
      navigate("/");
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
      navigate("/");
    }
  }
  useEffect(() => {
    if (id) {
      setTask(tasks.find((task) => task.id === id));
    }
  }, []);

  return (
    <Container maxWidth="xs" fixed className='container'>
      <Card sx={{display: 'flex'}}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" component="h2">
              {id ? "Edit Task" : "Add Task"}
            </Typography>
            <input
              name="title"
              type="text"
              placeholder="Title"
              onChange={handleChange}
              value={task.title}
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={task.description}
            >
              Description
            </textarea>
            <button className='material-button'>Save Me!</button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default TaskForm;
