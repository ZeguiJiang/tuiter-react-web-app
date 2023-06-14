import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      await dispatch(registerThunk({ username, password, email }));
      navigate("/tuiter/profile");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
    <h1>
        Register
    </h1>
    <div className="mt-2">
        <label>First name</label>
        <input className="form-control" type="text" value={firstName} onChange={(e) =>
        setFirstName( e.target.value)
    }/>
    </div>
    <div className="mt-2">
        <label>Last name</label>
        <input className="form-control" type="text" value={lastName} onChange={(e) =>
        setLastName(e.target.value)
    }/>
    </div>
    <div className="mt-2">
        <label>Username</label>
        <input className="form-control" type="text" value={username} onChange={(e) =>
        setUsername(e.target.value)
    }/>
    </div>
    <div className="mt-2">
        <label>Password</label>
        <input className="form-control" type="password" value={password} onChange={(e) =>
        setPassword(e.target.value)
    }/>
    </div>
    <div>
        <button className="btn btn-primary mt-2" onClick={handleRegister}>Register</button>

    </div>
    
</div>
    // <div>
    //   <h1>Register Screen</h1>
    //   <div className="mt-2">
    //     <label>Username</label>
    //     <input
    //       className="form-control"
    //       type="text"
    //       value={username}
    //       onChange={(event) => setUsername(event.target.value)}
    //     />
    //   </div>
    //   <div className="mt-2">
    //     <label>Password</label>
    //     <input
    //       className="form-control"
    //       type="password"
    //       value={password}
    //       onChange={(event) => setPassword(event.target.value)}
    //     />
    //   </div>
    //   <div className="mt-2">
    //     <label>Email</label>
    //     <input
    //       className="form-control"
    //       type="email"
    //       value={email}
    //       onChange={(event) => setEmail(event.target.value)}
    //     />
    //   </div>
    //   <button className="btn btn-primary mt-2" onClick={handleRegister}>
    //     Register
    //   </button>
    // </div>
  );
}

export default RegisterScreen;