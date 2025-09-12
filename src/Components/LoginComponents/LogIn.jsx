import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LogIn = ({ onForgot, onComplete }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  // ✅ On form submit
  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #f0f4f8, #d9e4ec)",
        minHeight: "100vh",
      }}
    >
      {/* Login Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow p-4 rounded w-100"
        style={{ maxWidth: "500px" }}
      >
        <h1 className="h4 mb-3 text-center">Login to 3MTT</h1>
        <p className="text-muted text-center">Hey, welcome back! 👋</p>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email")}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password")}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
            {errors.password && (
              <div className="invalid-feedback d-block">
                {errors.password.message}
              </div>
            )}
          </div>
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              {...register("rememberMe")}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <p className="text-end mb-0">
            <button
              type="button"
              className="btn btn-link p-0 text-decoration-none"
              onClick={onForgot}
            >
              Forgot Password?
            </button>
          </p>
        </div>

        {/* Login Button */}
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        {/* Divider */}
        <div className="text-center my-3">
          <span className="text-muted">OR</span>
        </div>

        {/* Complete Registration */}
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-12 col-lg-6 mb-2 mb-lg-0">
            <span className="d-block w-100">
              Have you already started your registration?
            </span>
          </div>
          <div className="col-12 col-lg-6">
            <button
              type="button"
              className="btn btn-outline-success w-100"
              onClick={onComplete}
            >
              Complete Registration
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
