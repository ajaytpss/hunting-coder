import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h2>{"{ huntingCoder };"}</h2>
          </div>
          <div>Copyright © 2023 Hunting coder, All rights reserved.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
