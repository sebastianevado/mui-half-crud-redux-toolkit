import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../features/taskSlice";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Stack,
  Button,
  Typography,

} from "@mui/material";
import "./TaskList.css";
function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };
  return (
    <div>
      <Stack direction="row" spacing={2} className="header">
        <h2>Task {tasks.length}</h2>
        <Link to="/create-tasks">
          <h2 className="nav">Create Task</h2>
        </Link>
      </Stack>
      <div className="grid">
            {tasks.map((task) => {
              return (
                <Card key={task.id}>
                  <CardContent className="Card">
                    <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>{task.title}</Typography>
                    <Typography sx={{ fontSize: 20 }} color="dark">{task.description}</Typography>
                    <CardActions>
                      <Button onClick={() => handleDelete(task.id)}>
                        Delete
                      </Button>
                    </CardActions>
                    <Link to={`edit-task/${task.id}`}>
                      <Button>Edit</Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
      </div>
    </div>
  );
}

export default TaskList;
