import React from "react";
import Header from "../components/home/header";
import Main  from "../components/home/main";

export default function Landing() {
  return (
    <div className="main--container h-fit lg:h-[100vh]">
      <Header />
      <Main />
    </div>
  );
}
