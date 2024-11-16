import React from "react";
import {useLocation} from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills" id="wd-toc">
      <li className="nav-item"><a id="wd-a" href="#/Labs" className="nav-link">Labs</a></li>
      <li className="nav-item"><a id="wd-a1" href="#/Labs/Lab1"
                                  className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</a></li>
      <li className="nav-item"><a id="wd-a2" href="#/Labs/Lab2"
                                  className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</a></li>
      <li className="nav-item"><a id="wd-a3" href="#/Labs/Lab3"
                                  className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</a></li>
      <li className="nav-item"><a id="wd-a4" href="#/Labs/Lab4"
                                  className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>Lab 4</a></li>
      <li className="nav-item"><a id="wd-a4" href="#/Labs/Lab5"
                                  className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>Lab 5</a></li>
      <li className="nav-item"><a id="wd-k" href="#/Kanbas" className="nav-link">Kanbas</a></li>
      <li className="nav-item"><a id="wd-node-server" href="https://kanbas-node-server-app-zinanz-31c381f4ae5f.herokuapp.com/"
                                  className="nav-link" target="_blank">Node server</a></li>
      <li className="nav-item"><a id="wd-github-react" href="https://github.com/harrryzhang1250/kanbas-react-web-app"
                                  className="nav-link" target="_blank">Github-React</a></li>
      <li className="nav-item"><a id="wd-github-node" href="https://github.com/harrryzhang1250/kanbas-node-server-app"
                                  className="nav-link" target="_blank">Github-Node</a></li>
    </ul>
  );
}

