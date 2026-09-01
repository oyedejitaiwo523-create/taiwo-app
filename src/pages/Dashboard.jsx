import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo">Account Hub</div>

        <nav>
          <Link to="/dashboard" className="nav-link active">
            Dashboard
          </Link>
          <Link to="/settings" className="nav-link">
            Settings
          </Link>
           <button onClick={logout}>Logout</button>
        </nav>
      </header>

      <div className="welc">
        <div className="welc-text">
           <h1 >Welcome back, {user?.name }</h1>
            <p>Here's an overview of your account</p>
        </div>
     </div>
     <div className="boxs">
      <div className="box">
        <div className="box-1">
          <h2>Email</h2>
          <p>{user?.email}</p>
        </div>
      </div>
            <div className="box">
        <div className="box-1">
          <h2>Member Since</h2>
          <p>Just now</p>
        </div>
      </div>
      <div className="box">
        <div className="box-1">
          <h2>Account Status</h2>
          <p>Active</p>
        </div>
      </div>
      </div>

      <h1>Quick Action</h1>

      <div className="nav-2">
        <Link to="/settings" className="nav-link">
          Edit Profile
        </Link>
        <Link to= "/settings" className="nav-link">
        change password
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;