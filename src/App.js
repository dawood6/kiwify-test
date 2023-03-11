import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<h1>404 Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
