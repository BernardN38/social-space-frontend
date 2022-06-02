import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "./pages/main/Main";
import Homepage from "./pages/homepage/Homepage";
import Register from "./pages/registerPage/Register";
import TimeLine from "./pages/timeline/TimeLine";
import PublicProfile from "./pages/publicProfile/PublicProfile"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* public pages */}
        <Route path="/" element={<Main />}>
          <Route index element={<Homepage />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Homepage />}/>
          <Route path="/timeline" element={<TimeLine />}/>
          <Route path="/profile" element={<PublicProfile />}/>
          {/* private pages */}
          <Route path="/profile" element={<PrivateOutlet />}>
            
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

function PrivateOutlet() {
  const auth = useSelector((state) => state.auth);
  return auth.status ? <Outlet /> : <Navigate to="/login" />;
}

// function PrivateRoute({ children }) {
//   const auth = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// }

function useAuth() {
  const authMode = useSelector((state) => state.auth.authMode);
  return true;
}
