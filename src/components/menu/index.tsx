import { NavLink } from "react-router-dom";


export function MenuComponent(){
  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
            <img src="/src/assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold text-white">Projeto de Exemplo</span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link text-white ${isActive ? "bg-gradient-primary active" : ""} `
                }
                to="/"
                >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link text-white ${isActive ? "bg-gradient-primary active" : ""} `
                } to="users">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">people</i>
                </div>
                <span className="nav-link-text ms-1">Usuários</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="mx-3">
            <a className="btn btn-outline-primary mt-4 w-100" type="button">
              Deslogar
            </a>
          </div>
        </div>
    </aside>
  );
}