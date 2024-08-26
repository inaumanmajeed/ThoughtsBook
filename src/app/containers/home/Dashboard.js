import React from "react";
import { styled } from "@mui/material/styles";
import { getAuth, signOut } from "firebase/auth";
import ThoughtsBookMainComponent from "app/components/todo/TodoCardMain";
import CustomButton from "app/components/shared/CustomButton";
import { toast } from "react-toastify";

const HomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
}));

const Dashboard = () => {
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
        toast.error("Failed to log out. Please try again.");
      });
  };

  return (
    <>
      <HomeContainer>
        <ThoughtsBookMainComponent />
        <CustomButton
          BtnCenter
          width={"10%"}
          onClick={handleLogout}
          title={"logout"}
        />
      </HomeContainer>
    </>
  );
};

export default Dashboard;
