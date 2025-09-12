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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const CompleteRegistration = ({ onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // ✅ State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ✅ Handle form submission
  const onSubmit = (data) => {
    console.log("Registration Completed:", data);
    alert("Registration Completed Successfully!");
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-start mt-4"
      style={{
        background: "linear-gradient(135deg, #f0f4f8, #d9e4ec)",
        minHeight: "100vh",
      }}
    >
      {/* Back button */}
      <div className="w-100 mb-3 text-start">
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm p-2 fs-6"
          onClick={onBack}
        >
          <i className="fa fa-arrow-left me-1"></i> Back to Login
        </button>
      </div>

      {/* Card */}
      <div
        className="bg-white shadow p-4 rounded w-100"
        style={{ maxWidth: "450px" }}
      >
        {/* Header */}
        <h2 className="h4 mb-3 text-center">Complete Registration</h2>
        <p className="text-muted text-center mb-4">
          Don't miss out, finish up and get started!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="EmailAddress" className="form-label">
              Email Address
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa fa-envelope"></i>
              </span>
              <input
                type="email"
                id="EmailAddress"
                placeholder="e.g email@admin.com"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email")}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa fa-lock"></i>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                {...register("password")}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1} // prevents focus shift
              >
                <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </button>
              {errors.password && (
                <div className="invalid-feedback">{errors.password.message}</div>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa fa-lock"></i>
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm Password"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                tabIndex={-1}
              >
                <i
                  className={`fa ${
                    showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </button>
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!isValid}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteRegistration;
