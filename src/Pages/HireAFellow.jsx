import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation schema
const schema = yup.object().shape({
  company: yup.string().required("Company name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  role: yup.string().required("Role/Position is required"),
  message: yup.string().min(10, "Message must be at least 10 characters"),
});

const HireAFellow = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // ✅ Handle form submit
  const onSubmit = (data) => {
    console.log("Hire a Fellow request:", data);
    alert(`Thanks ${data.company}! We'll reach out shortly.`);
    reset();
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #f0f4f8, #d9e4ec)",
      }}
    >
      <div
        className="bg-white shadow p-4 rounded w-100"
        style={{ maxWidth: "600px" }}
      >
        {/* Header */}
        <h2 className="h4 text-center mb-3 text-success">
          Are you an employer? Hire a Fellow!
        </h2>
        <p className="text-muted text-center mb-4">
          Fill out the form below and we’ll connect you with skilled fellows
          ready to contribute to your organization.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Company */}
          <div className="mb-3">
            <label htmlFor="company" className="form-label fw-bold">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              placeholder="e.g. TechSphere Ltd."
              className={`form-control ${errors.company ? "is-invalid" : ""}`}
              {...register("company")}
            />
            {errors.company && (
              <div className="invalid-feedback">{errors.company.message}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Contact Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. hr@company.com"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email")}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          {/* Role */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label fw-bold">
              Role / Position Needed
            </label>
            <input
              type="text"
              id="role"
              placeholder="e.g. Software Developer"
              className={`form-control ${errors.role ? "is-invalid" : ""}`}
              {...register("role")}
            />
            {errors.role && (
              <div className="invalid-feedback">{errors.role.message}</div>
            )}
          </div>

          {/* Message */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold">
              Additional Information
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell us more about your requirements..."
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              {...register("message")}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message.message}</div>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={!isValid}
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireAFellow;
