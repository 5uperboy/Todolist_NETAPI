import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodoPage from "./pages/TodoPage";
import LoginTest from "./test/login-test";
import RegisterTest from "./test/register-test";
import SidebarTest from "./test/sidebar-test";

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
