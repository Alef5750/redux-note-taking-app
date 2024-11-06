import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/nav-bar/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Notes } from "./pages/Notes";
import { CreateOrEditNote } from "./pages/CreateOrEditNote";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notes/new"
          element={
            <ProtectedRoute>
              <CreateOrEditNote />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notes/:id"
          element={
            <ProtectedRoute>
              <CreateOrEditNote />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
