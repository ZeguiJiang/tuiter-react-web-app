import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/auth-thunks";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = () => {
    dispatch(updateUserThunk(profile));
  };

  useEffect(() => {
    async function fetchProfile() {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    }

    fetchProfile();
  }, [dispatch]);

  return (
    <div>
      <h1>Profile Screen</h1>
      {profile && (
        <>
          <div className="mt-2">
            <label>UserName</label>
            <input
              className="form-control"
              type="text"
              value={profile.username}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  username: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>

          <div className="mt-2">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              value={profile.email}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  email: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>

          <div className="mt-2">
            <button className="m-2 btn btn-primary" onClick={save}>
              Save
            </button>
            <button
              className="m-2 btn btn-secondary"
              onClick={() => {
                dispatch(logoutThunk());
                navigate("/tuiter/login");
              }}
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  ); // see below
}
export default ProfileScreen;