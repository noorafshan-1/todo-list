import React from "react";
import { ListItem, IconButton, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskItem =({ task, onDelete, onToggle }) => {
  return (
    <ListItem
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: task.isComplete ? "line-through" : "none",
        backgroundColor: "#f9f9f9",
        borderRadius: "5px",
        marginBottom: "10px",
        padding: "10px",
      }}
    >
      <Typography
        variant="body1"
        style={{ color: task.isComplete ? "#777" : "#000" }}
        onClick={() => onToggle(task.id)}
      >
        {task.description}
      </Typography>
      <div>
        <IconButton
          color={task.isComplete ? "success" : "default"}
          onClick={() => onToggle(task.id)}
        >
          <CheckCircleIcon />
        </IconButton>
        <IconButton color="error" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </ListItem>
  );
}

export default TaskItem;
