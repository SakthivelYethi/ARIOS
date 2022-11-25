import React, { useEffect, useState } from "react";
import logo from "../assets/logo/webscript.png";
import user from "../assets/logo/profile.jpg";

import MenuItem from "./MenuItem";


export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-motherboard",
  },
  {
    name: "Administrator",
    exact: true,
    to: `/admin`,
    iconClassName: "bi bi-universal-access",
    subMenus: [
      { name: "Applications", to: "/admin/applications" },
      { name: "User", to: "/admin/users" },
      { name: "Client", to: "/admin/clients" },
      { name: "Learn", to: "/admin/learn" },
    ],
  },

  { name: "Functions", to: `/functions`, iconClassName: "bi bi-unity" },
  {
    name: "Test",
    exact: true,
    to: `/test`,
    iconClassName: "bi bi-bag-check",
    subMenus: [
      { name: "Teststep", to: "/test/teststep" },
      { name: "Testcase", to: "/test/testcase" },
      { name: "Testpack", to: "/test/testpack" },
    ],
  },
  { name: "Execution", to: `/execution`, iconClassName: "bi bi-bug" },
  { name: "Settings", to: `/settings`, iconClassName: "bi bi-gear-wide-connected",
    subMenus: [
      { name: "Email", to: "/settings/email" },
      { name: "JIRA", to: "/settings/jira" },
    ], 
  },
  { name: "Reports", to: `/reports`, iconClassName: "bi bi-cloud-download",
    subMenus: [
      { name: "User", to: "/reports/user" },
      { name: "Periodic", to: "/reports/periodic" },
      { name: "Run", to: "/reports/run" },
    ],
 },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="webscript" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>
      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Sakthivel</h5>
          <p>sakthivel.subramaniyam</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
