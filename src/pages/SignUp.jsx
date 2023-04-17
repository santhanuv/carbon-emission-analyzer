import React, { useState } from "react";
import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const initData = {
  email: "",
  password: "",
};
const SignUp = () => {
  const [data, setData] = useState(initData);
  const { auth, setUser } = useContext(FirebaseContext);

  const onDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitData = async (e) => {
    e.preventDefault();

    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    setUser(res.user);
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
