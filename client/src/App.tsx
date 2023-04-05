// npm modules
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// page components
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ProfilePage from "./pages/Profile/Profile";
import Worlds from "./pages/Worlds";
import Level1 from "./pages/Levels/Level1";
import Level2 from "./pages/Levels/Level2";
import Level3 from "./pages/Levels/Level3";
import Avatar from "./pages/Avatar";

// components
import NavBar from "./Components/NavBar/NavBar";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// services
import * as authService from "./Services/authService";
import * as profileService from "../src/Services/profileService";
// import * as progressService from '../src/Services/progressService'

// stylesheets
import "./css/app.css";

// types
import { Profile, User } from "./Types/models";
import Completed from "./pages/Levels/Completed";

function App(): JSX.Element {
    const [user, setUser] = useState<User | null>(authService.getUser());
    const navigate = useNavigate();
    const [level, setLevel] = useState<number>(0)

    const handleLogout = (): void => {
        authService.logout();
        setUser(null);
        navigate("/");
    };

    const handleAuthEvt = (): void => {
        setUser(authService.getUser());
    };

    const profileId = user?.profile.id;

    const [profile, setProfile] = useState<Profile>({
        name: "",
        userName: "",
        photo: "",
        id: 0,
        createdAt: "",
        updatedAt: "",
    });

    useEffect((): void => {
        const fetchProfile = async (): Promise<void> => {
            try {
                console.log("profileId", profileId);
                const profileData: Profile = await profileService.getProfile(
                    profileId
                );
                console.log("profileData", profileData);
                setProfile(profileData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProfile();
    }, [user]);

    return (
        <>
            {user && <NavBar user={user} handleLogout={handleLogout} />}
            <Routes>
                <Route path="/level1" element={<Level1 />} />
                <Route path="/level2" element={<Level2 />} />
                <Route path="/level3" element={<Level3 />} />
                <Route path="/" element={<Landing user={user} />} />
                <Route
                    path="/worlds"
                    element={<Worlds user={user} setLevel={setLevel} />}
                />
                <Route
                    path="/signup"
                    element={<Signup handleAuthEvt={handleAuthEvt} />}
                />
                <Route
                    path="/login"
                    element={<Login handleAuthEvt={handleAuthEvt} />}
                />
                <Route
                    path="/profiles"
                    element={
                        <ProtectedRoute user={user}>
                            <Profiles />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/avatar"
                    element={
                        <ProtectedRoute user={user}>
                            <Avatar />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute user={user}>
                            <ProfilePage user={user} profile={profile} />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/change-password"
                    element={
                        <ProtectedRoute user={user}>
                            <ChangePassword handleAuthEvt={handleAuthEvt} />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/completed"
                    element={<Completed level={level} setLevel={setLevel} />}
                />
            </Routes>
        </>
    );
}

export default App;
