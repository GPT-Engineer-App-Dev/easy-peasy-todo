import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Todo from "./pages/Todo.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
