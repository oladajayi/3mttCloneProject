import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation schema
const schema = yup.object().shape({
  meansOfId: yup.string().required("Please select a valid ID type"),
});

const FellowRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(`You selected: ${data.meansOfId.toUpperCase()}`);
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-start mt-4"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="bg-white shadow p-4 rounded w-100"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="h4 text-center mb-3">Register to Join 3MTT</h2>
        <p className="text-muted text-center mb-4">
          Hurray 🎉 Get ready to learn new skills 👋
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Select Means of ID */}
          <div className="mb-3">
            <label htmlFor="meansOfId" className="form-label fw-semibold">
              Select a Means of Identification
            </label>
            <select
              id="meansOfId"
              className={`form-select ${errors.meansOfId ? "is-invalid" : ""}`}
              {...register("meansOfId")}
            >
              <option value="">-- Select ID Type --</option>
              <option value="nin">NIN</option>
              <option value="bvn">BVN</option>
            </select>
            {errors.meansOfId && (
              <div className="invalid-feedback">{errors.meansOfId.message}</div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default FellowRegister;
