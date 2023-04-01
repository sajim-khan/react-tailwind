import React from 'react';

const Navbar = () => {

const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Blog Post", path: "/blog/:postId" },
  { id: 6, name: "Login", path: "/login" },
  { id: 7, name: "Register", path: "/register" }
];


    return (
        <nav>
            <ul>
                {
                    routes.map(route => <li>{route.name}</li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;