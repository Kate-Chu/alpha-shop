import React from "react";

const Footer = React.memo(() => {
  return (
    <footer>
      <nav className="navbar fixed-bottom navbar-light bg-light p-0">
        <div className="m-auto text-secondary">&copy; Amber Fragments</div>
      </nav>
    </footer>
  );
});

export default Footer;
