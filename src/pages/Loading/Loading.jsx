import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-40vh)] flex items-center justify-center ">
      <MoonLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
