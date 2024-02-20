import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodoPage from "./pages/TodoPage";
import LoginTest from "./test/login-test";
import RegisterTest from "./test/register-test";
import SidebarTest from "./test/sidebar-test";
import HeaderTest from "./test/header-test";
import TaskContentTest from "./test/tasksContent-test";
import NewTasks from "./test/NewTasks";
import AddTaskModalTest from "./test/addTaskModal-test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="todos/*" element={<TodoPage />} />
          {/* Test Pages for new UI */}
          <Route path="login-test" element={<LoginTest />} />
          <Route path="register-test" element={<RegisterTest />} />
          <Route path="sidebar" element={<SidebarTest />} />
          <Route path="header-test" element={<HeaderTest />} />
          <Route path="content" element={<TaskContentTest />} />
          <Route path="newTasks" element={<NewTasks />} />
          <Route path="addTaskModal" element={<AddTaskModalTest />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
