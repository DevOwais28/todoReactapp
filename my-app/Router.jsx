import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./src/components/Signup";
import Todo from "./src/components/Todo";
import Login from "./src/components/login";


const Router = () => {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Todo />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export {Router}
