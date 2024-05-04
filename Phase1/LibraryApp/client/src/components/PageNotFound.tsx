import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  const CustomButton = React.memo(function CustomButton() {
    return (
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    );
  });

  return (
    <>
      <div>
        <h1>PageNotFound</h1>
        <CustomButton />
        <h2>LEARN MORE ABOUT US Brand USA</h2>

        <div>
          is an organization dedicated to marketing the United States as a
          premier travel destination. Brand USA works in close partnership with
          the travel industry to maximize the economic and social benefits of
          travel. These benefits include fostering understanding between people
          and cultures and creating jobs essential to the economy.
        </div>
      </div>
    </>
  );
}
