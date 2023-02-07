import React, { useState } from "react";
import MoviePanel from "./MoviePanel";
import UserPanel from "./UserPanel";


export default function Admin() {
  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="movies-tab"
            data-bs-toggle="tab"
            data-bs-target="#movies-tab-pane"
            type="button"
            role="tab"
            aria-controls="movies-tab-pane"
            aria-selected="true"
          >
            Peliculas
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="users-tab"
            data-bs-toggle="tab"
            data-bs-target="#users-tab-pane"
            type="button"
            role="tab"
            aria-controls="users-tab-pane"
            aria-selected="false"
          >
            Usuarios
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="movies-tab-pane"
          role="tabpanel"
          aria-labelledby="movies-tab"
        >
          <MoviePanel />
        </div>
        <div
          className="tab-pane fade"
          id="users-tab-pane"
          role="tabpanel"
          aria-labelledby="users-tab"
        >
          <UserPanel />
        </div>
      </div>
    </>
  );
}