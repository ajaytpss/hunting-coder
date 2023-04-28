import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>HuntingCoder | About HuntingCoder</title>
      </Head>
      <div className={`container ${styles.home}`}>
        <h2>{"Welcome to {huntingCoder};"}</h2>
        <p>
          A community of passionate developers who share their knowledge,
          experience, and enthusiasm for coding with others. We are dedicated to
          creating a platform where developers of all levels can learn, grow,
          and connect with each other in a supportive environment.
        </p>
        <Link href={"/about"} className={`btn ${styles.btn}`}>
          Learn more
        </Link>
      </div>
    </>
  );
}
