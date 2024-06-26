import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";



function App() {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>My Todo list</h1>
      <AddTodoForm/>
      <TodoList/>
      <TotalCompleteItems/>
    </div>
  );
}

export default App;
