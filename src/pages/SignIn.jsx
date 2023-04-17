import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseContext } from "../context/FirebaseContext";

const initData = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [data, setData] = useState(initData);
  const { auth, setUser } = useContext(FirebaseContext);

  const onDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitData = async (e) => {
    e.preventDefault();

    const res = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    console.log(res.user);
    setUser(res.user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={onSubmitData}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={data.email}
            name="email"
            id="email"
            onChange={onDataChange}
            placeholder="email"
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={data.password}
            name="password"
            id="password"
            placeholder="password"
            onChange={onDataChange}
          ></input>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
