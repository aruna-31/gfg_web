import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProfileSetup from './pages/ProfileSetup';
import DashboardLayout from './layouts/DashboardLayout';
import AdminDashboard from './pages/AdminDashboard';
import Team from './pages/Team';
import Tasks from './pages/Tasks';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white gfg-gradient font-sans">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/setup-profile" element={<ProfileSetup />} />

          <Route path="/app" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/app/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="my-dashboard" element={<UserDashboard />} />
            <Route path="team" element={<Team />} />
            <Route path="tasks" element={<Tasks />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
