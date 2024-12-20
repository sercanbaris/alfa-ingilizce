import React from "react";
import logo from "../img/logo.png";
import styles from "../css/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div>
          <img className={styles.logo} src={logo} />
        </div>
        <div className={styles.sign}>
          © 2024 All rights reserved by Alfa Almanca
        </div>
      </div>
    </div>
  );
}

export default Footer;
