import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>POCKETCLASS</h1>
          <p>Sports , Arts And Music </p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receice news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;