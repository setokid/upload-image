import React from "react";
import "./RootRoute.css";
import { Outlet } from "react-router-dom";

const RootRoute: React.FC = () => {
  return (
    <>
      <div id="sidebar">
        <h1>Bình Chữa Cháy Team</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`Home`}>Home</a>
            </li>
            <li>
              <a href={`ImageUpload`}>ImageUpload</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default RootRoute;
