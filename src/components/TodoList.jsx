import { VStack } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <VStack spacing={4} w="100%">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </VStack>
  );
};

export default TodoList;