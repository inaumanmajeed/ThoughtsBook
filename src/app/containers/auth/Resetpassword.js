import React, { useState } from "react";
import { authLogin } from "app/firebase/index";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import CustomInput from "app/components/shared/Input";
import AuthLayout from "app/layout/auth/AuthLayout";
import CustomButton from "app/components/shared/CustomButton";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(authLogin, email);
      toast.success("Password reset email sent!");
      navigate("/");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      toast.error("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <AuthLayout login title={"Reset Password"}>
      <form onSubmit={handleResetPassword}>
        <div>
          <CustomInput
            noMargin
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            error={false}
          />
        </div>
        <CustomButton BtnCenter width={"fit-content"} title={"Reset"} />
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
