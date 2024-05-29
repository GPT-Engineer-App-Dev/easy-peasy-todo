import { useState } from "react";
import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const updateTodo = (id, newText, completed = null) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText, completed: completed !== null ? completed : todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl">Todo App</Heading>
        <Box w="100%" display="flex">
          <Input
            placeholder="Add a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTodo()}
          />
          <Button ml={2} onClick={addTodo}>Add</Button>
        </Box>
        <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      </VStack>
    </Container>
  );
};

export default Todo;