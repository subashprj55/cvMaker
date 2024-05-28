import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paper from "./Components/Template/Paper";
import ResumeForm from "./Components/ResumeForm";
import Faq from "./Components/Faq";
import PFD from "./Components/PFD";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signUp" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="resume" element={<ResumeForm />} />
          <Route path="faq" element={<Faq />} />
          <Route path="preview" element={<PFD />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
