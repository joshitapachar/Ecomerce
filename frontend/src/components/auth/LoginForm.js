import React from "react";

import Button from "../ui/Button";

import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { icons } from "../../constants/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "@/hooks/useUser";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (loginData) => {
    const user = await login(loginData);
    if (user && location.pathname === "/authentication") {
      navigate("/account");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="input-label">
          Email
          <div className="input-wrapper">
            <FontAwesomeIcon icon={icons.email}></FontAwesomeIcon>
            <input type="text" {...register("email", { required: true })} />
          </div>
        </label>
        {errors.email && <span>This field is required</span>}
        <label className="input-label">
          Password
          <div className="input-wrapper">
            <FontAwesomeIcon icon={icons.lock}></FontAwesomeIcon>
            <input
              type="password"
              {...register("password", { required: true })}
            />
          </div>
        </label>
        {errors.password && <span>This field is required</span>}
        <Button>LOGIN</Button>
      </form>
    </div>
  );
}

export default Login;
