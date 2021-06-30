import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="landing-container">
      <div className="landing-card">
        <h3 className="landing-title">
          WELCOME TO AKEA COMICS
        </h3>
        <p className="landing-body">
          Where the DC and Marvel universes collide.  Buy, sell, or browse all your favorites here!
        </p>
        <button className="landing-button">
          <Link to="/comics">Browse All Comics</Link>
        </button>
      </div>
    </div>
  );
}