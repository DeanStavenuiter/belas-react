import "./NavBar.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="menu">
        <div id="title" className="section">
          <div className="icons-name">
            <div className="icon-and-name">
              <div className="menu-icon"></div>
            </div>
            <span className="name-nav title">
              <b>BE</b>TER <b>LAS</b>WERK
            </span>
          </div>
        </div>
        <div className="section">
          <NavLink to="/">
            <div className="icons-name">
              <div className="icon-and-name">
                <span className="material-symbols-outlined"> home </span>
              </div>
              <span className="name-nav">Home</span>
            </div>
          </NavLink>
        </div>
        <div className="section">
          <div className="icons-name has-dropdown">
            <div className="icon-and-name">
              <span className="material-symbols-outlined"> construction </span>
            </div>
            <div className="expand-more">
              <span className="name-nav">Constructies</span>
              <span className="material-symbols-outlined expand-icon"> expand_more </span>
            </div>
          </div>
          <div className="dropdown">
            <ul>
              <li>
                <NavLink to="/dragendeconstructies">
                  Dragende constructies
                </NavLink>
              </li>
              <li>
                <NavLink to="/balkonframes">Balkon frames</NavLink>
              </li>
              <li>
                <NavLink to="/renovatiewerk">Renovatie werk</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="icons-name has-dropdown">
            <div className="icon-and-name">
              <span className="material-symbols-outlined"> fence </span>
              <span className="name-nav">Aluminium hekken</span>
            </div>
            <div className="expand-more">
              <span className="material-symbols-outlined expand-icon"> expand_more </span>
            </div>
          </div>
          <div className="dropdown">
            <ul>
              <li>
                <NavLink to="/">Spijlenhek 15x30mm</NavLink>
              </li>
              <li>
                <NavLink to="/">Spijlenhek 70x20mm</NavLink>
              </li>
              <li>
                <NavLink to="/">Spijlenhek rond 25mm</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <NavLink to="/stalenhekken">
            <div className="icons-name">
              <div className="icon-and-name">
                <span className="material-symbols-outlined"> fence </span>
                <span className="name-nav">Stalen hekken</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="section">
          <div className="icons-name has-dropdown">
            <div className="icon-and-name">
              <span className="material-symbols-outlined"> build </span>
            </div>
            <div className="expand-more">
              <span className="name-nav">Machine bouw</span>
              <span className="material-symbols-outlined expand-icon"> expand_more </span>
            </div>
          </div>
          <div className="dropdown">
            <ul>
              <li>
                <NavLink to="/drukvaten">Vaten</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="icons-name has-dropdown">
            <div className="icon-and-name">
              <span className="material-symbols-outlined"> inventory_2 </span>
            </div>
            <div className="expand-more">
              <span className="name-nav">Voorraad</span>
              <span className="material-symbols-outlined expand-icon"> expand_more </span>
            </div>
          </div>
          <div className="dropdown">
            <ul>
              <li>
                <NavLink to="/voorraadalluminium">Alumminium</NavLink>
              </li>
              <li>
                <NavLink to="/voorraadstaal">Staal</NavLink>
              </li>
              <li>
                <NavLink to="/voorraadrvs">Rvs</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <NavLink to="/erkendleerbedrijf">
            <div className="icons-name">
              <div className="icon-and-name">
                <span className="material-symbols-outlined"> school </span>
              </div>
              <span className="name-nav">Erkend leerbedrijf</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
