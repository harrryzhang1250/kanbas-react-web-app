import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <h1>Zinan Zhang - Section #1</h1>
      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/kanbas">Kanbas Application</Link></li>
        <li><a href="https://github.com/harrryzhang1250/kanbas-react-web-app" id="wd-github" target="_blank">Github
          Repository</a><br/></li>
      </ul>
    </div>
  );
}
