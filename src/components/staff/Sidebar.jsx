import React from "react";
import Link from "next/link";

const Sidebar = ({ children }) => {
  const sidenav = [
    {
      name: "Dashboard",
      link: "/staff_panel",
    },
    {
      name: "Members",
      link: "/staff_panel/members",
    },
    {
      name: "Class",
      link: "/staff_panel/classes",
    },
    {
      name: "Contact",
      link: "/staff_panel/contact",
    },
    {
      name: "Membership",
      link: "/staff_panel/membership",
    },
    {
      name: "Review",
      link: "/staff_panel/review",
    },
  ];
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col m-5">
        {/* Page content here */}
        {children}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-slate-300 text-base-content min-h-full w-52 p-4">
          {/* Sidebar content here */}
          {sidenav.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
