import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
});

const ForgetPassword = ({ onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // ✅ Handle form submission
  const onSubmit = (data) => {
    console.log("Password reset request:", data);
    alert(`Password reset link sent to ${data.email}`);
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
          className="btn btn-outline-secondary btn-sm p-2 fs-5"
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
        <h2 className="h4 mb-3 text-center">Forgot Password</h2>
        <p className="text-muted text-center mb-4">
          Don’t worry, we’ve got you covered. Enter your email below and we’ll
          send you a reset link.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
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

          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!isValid}
          >
            Request Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

