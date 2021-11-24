import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          Git Hub:
          <a
            className="text-dark" rel='noreferrer'
            href="https://github.com/johnicassere"
            target="_blank"
          >
            Johni-Cassere
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
