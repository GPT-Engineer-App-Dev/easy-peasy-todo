import { useState } from "react";
import { Box, Input, Button, VStack, Heading } from "@chakra-ui/react";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const updateTodo = (id, newText, completed = false) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading mb={4}>Todo List</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button onClick={addTodo} colorScheme="teal">
          Add Task
        </Button>
        <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      </VStack>
    </Box>
  );
};

export default Todo;