"use client";
export default function Navigation(page) {


  if (page === "projects") {
    
  }

  const homePageUrl = "../../";


  return (
    
 <nav className="navbar navbar-dark w-100" aria-label="First navbar example">
        <div className="container-fluid">
          <a className="navbar-brand p-1 mb-0" href={homePageUrl}>Rafael Camilo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse " id="navbarsExample01" >
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="../../">Home</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="../pages/About">About</a></li>
              <li className="nav-item">
                <a className="nav-link" href="../pages/Projects">Projects</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}