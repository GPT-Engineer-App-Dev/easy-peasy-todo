import { useState } from "react";
import { Box, IconButton, Input, HStack, Checkbox } from "@chakra-ui/react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    onUpdate(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <HStack spacing={4} w="100%" p={2} borderWidth={1} borderRadius="md">
      <Checkbox isChecked={todo.completed} onChange={() => onUpdate(todo.id, newText, !todo.completed)} />
      {isEditing ? (
        <Input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <Box flex="1" textDecoration={todo.completed ? "line-through" : "none"}>
          {todo.text}
        </Box>
      )}
      <IconButton
        icon={isEditing ? <FaSave /> : <FaEdit />}
        onClick={isEditing ? handleSave : () => setIsEditing(true)}
        aria-label={isEditing ? "Save" : "Edit"}
      />
      <IconButton icon={<FaTrash />} onClick={() => onDelete(todo.id)} aria-label="Delete" />
    </HStack>
  );
};

export default TodoItem;