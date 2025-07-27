import React from "react";
import FuzzyText from "../../components/fizzyText";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FuzzyText baseIntensity={0.2}>404!</FuzzyText>
    </div>
  );
};

export default NotFound;
