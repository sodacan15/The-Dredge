import { useState } from "react";
import Home from "./pages/Home";
import Logs from "./pages/Logs";
import Research from "./pages/Research";
import Gallery from "./pages/Gallery";
import Author from "./pages/Author";
import "./App.css";

const PAGES = ["Home", "Logs", "Research", "Gallery", "Author"];

export default function App() {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch (page) {
      case "Home":     return <Home />;
      case "Logs":     return <Logs />;
      case "Research": return <Research />;
      case "Gallery":  return <Gallery />;
      case "Author":   return <Author />;
      default:         return <Home />;
    }
  };

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-drop">~</span>
        </div>
        <ul className="nav-list">
          {PAGES.map((p) => (
            <li key={p}>
              <button
                className={`nav-btn ${page === p ? "active" : ""}`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <span>The Dredge</span>
        </div>
      </nav>

      <main className="content">
        {renderPage()}
      </main>
    </div>
  );
}
