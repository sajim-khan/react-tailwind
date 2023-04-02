import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Blog Post", path: "/blog/:postId" },
    { id: 6, name: "Login", path: "/login" },
    { id: 7, name: "Register", path: "/register" },
  ];

  return (
    <nav className="bg-purple-500 color:blue ">
      <div onClick={() => setOpen(!open)} className="md:hidden ml-4">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </span>
      </div>

      <ul className={`md:flex absolute md:static duration-500 bg-cyan-400 pl-8 pb-4 py-2 ${open ? 'top-6' : '-top-48'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
