import React, { useState, useEffect } from "react";
import Register from "./Register";
import LogIn from "./LogIn";
import ForgetPassword from "./ForgetPassword";
import CompleteRegistration from "./CompleteRegistration";

const User = ({ autoRegister = false }) => {
  const [userStatus, setUserStatus] = useState("Register Here");
  const [showForget, setShowForget] = useState(false);
  const [showCompleteReg, setShowCompleteReg] = useState(false);

  // ✅ If Apply page wants Register, force it on mount
  useEffect(() => {
    if (autoRegister) {
      setUserStatus("Login Here"); // 🔑 This makes <Register /> load
      setShowForget(false);
      setShowCompleteReg(false);
    }
  }, [autoRegister]);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f0f4f8, #d9e4ec)",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      {/* Header and toggle button */}
      
        <div className="d-flex flex-column align-items-end w-100 mb-4 text-center">
          <div
            className="border rounded p-2 mb-2 mt-3 mx-4 shadow-sm position-relative"
            style={{
              maxWidth: "260px",
              backgroundColor: "#fff8f0",
              color: "green",
            }}
          >
            <p className="mb-1 fw-bold">
              {userStatus === "Login Here"
                ? "Do you have an account?"
                : "Don’t have an account yet?"}
            </p>
            <small className="text-success">
              {userStatus === "Login Here"
                ? "No need to register a new one, Login here."
                : "No worries, start with a registration."}
            </small>
          </div>

          <button
            className="btn btn-outline-success mt-2 mx-4"
            onClick={() => {
              setUserStatus(
                userStatus === "Register Here" ? "Login Here" : "Register Here"
              );
              setShowForget(false);
              setShowCompleteReg(false);
            }}
          >
            {userStatus}
          </button>
        </div>
     

      {/* Main Content */}
      {!showForget && !showCompleteReg && userStatus === "Register Here" && (
        <LogIn
          onForgot={() => setShowForget(true)}
          onComplete={() => setShowCompleteReg(true)}
        />
      )}
      {!showForget && !showCompleteReg && userStatus === "Login Here" && (
        <Register />
      )}

      {/* Forget Password */}
      {showForget && userStatus === "Register Here" && <ForgetPassword onBack={() => setShowForget(false)} />}

      {/* Complete Registration */}
      {showCompleteReg && (
        <CompleteRegistration onBack={() => setShowCompleteReg(false)} />
      )}
    </div>
  );
};

export default User;
