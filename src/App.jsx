import { useState } from "react";
import page1 from "../artifacts/1.svg?url";
import page2 from "../artifacts/2.svg?url";
import page3 from "../artifacts/3.svg?url";
import page4 from "../artifacts/4.svg?url";
import page5 from "../artifacts/5.svg?url";

const pages = [
  { label: "Page 1", src: page1 },
  { label: "Page 2", src: page2 },
  { label: "Page 3", src: page3 },
  { label: "Page 4", src: page4 },
  { label: "Page 5", src: page5 },
];

export default function App() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="app">
      <nav className="nav">
        <ul className="nav-list">
          {pages.map((page, i) => (
            <li key={page.label}>
              <button
                className={`nav-item${current === i ? " nav-item--active" : ""}`}
                onClick={() => setCurrent(i)}
              >
                {page.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="page-view">
        <img
          key={current}
          src={pages[current].src}
          alt={pages[current].label}
          className="page-svg"
        />
      </main>
    </div>
  );
}
