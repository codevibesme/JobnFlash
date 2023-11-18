import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setIsLoggedIn, setToken, setUser } from "../slices/authSlice";
const LoginSuccess = () => {
  const { id, pass } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let fetchUser = async () => {
    try {
      let credentials = JSON.stringify({ id });
      let response = await fetch("http://localhost:8000/auth/login/success", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      });
      const { email } = await response.json();
      credentials = JSON.stringify({ email, password: pass });
      response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      });
      const { user, token } = await response.json();
      console.log(user);
      if (user && token) {
        dispatch(setUser({ user }));
        dispatch(setToken({ token }));
        dispatch(setIsLoggedIn({ flag: true }));
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchUser();
    console.log(id, pass);
  }, [id, pass]);
  //   const { user } = useParams();
  //   console.log(user);
  //   user = JSON.parse(user);
  return <div>Succcessfull Login: </div>;
};
export default LoginSuccess;
