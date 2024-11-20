import React from "react";

function Footer() {
  return (
    <p className="footer">
      KnowWords | Developed by Hasnain Khan | Copyright &copy;{" "}
      {new Date().getFullYear()} | All Rights Reserved
    </p>
  );
}

export default Footer;
