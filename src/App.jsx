import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodoPage from "./pages/todoPage/TodoPage";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="todo" element={<TodoPage />} />
          </Route>
        </Routes>
    </AuthProvider>
      </Router>
  );
}

export default App;
