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
          <strong>Where the DC and Marvel universes collide. <br/> Buy, sell, or browse all your favorites here!</strong>
        </p>
        <button className="landing-button">
          <Link className="landing-link-text" to="/comics">Browse All Comics</Link>
        </button>
      </div>
    </div>
  );
}