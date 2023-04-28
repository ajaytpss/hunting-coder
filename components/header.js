import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  const signInHandler = (e) => {
    e.preventDefault();
    signIn();
  };
  const signOutHandler = (e) => {
    e.preventDefault();
    signOut();
  };
  // console.log(process.env.DB_URL);

  return (
    <div className={`${styles.header}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h1>
            <Link href={"/"}>{"{ huntingCoder };"}</Link>
          </h1>
        </div>
        <div>
          <ul className={`d-flex align-items-center ${styles.menu}`}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About Hunting Coder</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blogs</Link>
            </li>
            {session ? (
              <>
                <li>
                  <Link href={"/admin"}>Dashboard</Link>
                </li>
                <li>
                  <Link href={"/api/auth/signout"} onClick={signOutHandler}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link href={"/api/auth/signin"} onClick={signInHandler}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
