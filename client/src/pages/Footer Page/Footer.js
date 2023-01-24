import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="text-center">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="mr-2">&copy; 2022 </span>
              <a
                href="https://github.com/yusifmustafa"
                className="mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yusif Mustafa
              </a>
              <span> CopyRight</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
