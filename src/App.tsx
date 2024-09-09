import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/home/Home";
import DashBoard from "./pages/dashboard/DashBoard";
import Errand from "./pages/dashboard/Errand";
import Errandor from "./pages/dashboard/Errandor";
import Discover from "./pages/Discover";
import { BsStarFill } from "react-icons/bs";
import Profile from "./pages/user/Profile";
import MyErrands from "./pages/user/MyErrands";
import PostErrand from "./pages/dashboard/PostErrand";
import Account from "./pages/user/Account";
import Chat from "./pages/dashboard/Chat";
import AddProfile from "./pages/user/AddProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/errandor/1/errands" element={<MyErrands />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/add-profile" element={<AddProfile />} />
          <Route path="/errandor/1/Chat" element={<Chat />} />
          <Route path="/dashboard/errand/1" element={<Errand />} />
          <Route
            path="/dashboard/errandor/1"
            element={
              <Errandor showCallButton={true}>
                <div className="flex flex-row gap-4 items-center">
                  <span>Star me:</span>
                  <BsStarFill size={24} />
                </div>
              </Errandor>
            }
          />
          <Route path="/post-errand" element={<PostErrand />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
