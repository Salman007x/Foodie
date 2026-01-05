import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
export default function Home() {
  return (
    <div className="container text-center mt-5">
      <Navbar />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <h2 className="mt-3">Food to Foodie!</h2>
      <p className="text-muted">
        Get started by exploring our delicious recipes.
      </p>
    </div>
  );
}
