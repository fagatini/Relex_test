import { Login } from './pages/Login';
import { RequireAdminAuth } from './utils/RequireAdminAuth';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfilesPage } from './pages/ProfilesPage';
import { TestsPage } from './pages/TestsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/profiles"
          element={
            <RequireAdminAuth>
              <ProfilesPage/>
            </RequireAdminAuth>
          }
        />
        <Route
          path="/tests"
          element={
            <RequireAdminAuth>
              <TestsPage/>
            </RequireAdminAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
