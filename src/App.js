import React, { useState } from "react";
import { TextField, Button, Typography, Container, List, Box } from "@mui/material";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [error, setError] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") {
      setError("Task description cannot be empty!");
      return;
    }
    const newTask = {
      id: Date.now(),
      description: taskInput,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
    setError("");
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        To-Do List
      </Typography>
      <Box display="flex" gap={2} marginBottom={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Enter a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <Button variant="contained" color="primary" onClick={addTask}>
          Add
        </Button>
      </Box>
      <List>
        {tasks.length === 0 ? (
          <Typography variant="body1" color="textSecondary">
            No tasks added yet!
          </Typography>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleComplete}
            />
          ))
        )}
      </List>
    </Container>
  );
}

export default App;
