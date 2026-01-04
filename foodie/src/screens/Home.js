import React from "react";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="container text-center mt-5">
      <Navbar />
      <h1>Home Screen</h1>
      <h2 className="mt-3">Food to Foodie!</h2>
      <p className="text-muted">
        Get started by exploring our delicious recipes.
      </p>
    </div>
  );
}
