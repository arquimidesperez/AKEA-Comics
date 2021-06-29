import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      hello this is my home
      <Link to="/comics">Browse All Comics</Link>
    </div>
  );
}
