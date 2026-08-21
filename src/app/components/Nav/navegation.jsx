"use client";
import Link from 'next/link';
export default function Navigation({ homePageUrl = "/" }) {
  return (
    
 <nav className="navbar navbar-dark w-100" aria-label="First navbar example">
        <div className="container-fluid">
          <Link className="navbar-brand p-1 mb-0" href={homePageUrl}>Rafael Camilo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse " id="navbarsExample01" >
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/pages/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/pages/Projects">Projects</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" href="/pages/Contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}