import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../Context/AuthContext";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import ForgotPassword from "./forgot-password";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <BrowserRouter>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-400" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            <Routes>
              <Route path="/dashboard"element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}
              />
              <Route path="/signup" element={<Signup></Signup>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
              <Route path="/update-profile" element={<UpdateProfile></UpdateProfile>}></Route>
            </Routes>
          </AuthProvider>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
