import axios from "axios";
import React, { useState } from "react";
import styles from "../../styles/BlogList.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const BlogPage = (props) => {
  const [blogs] = useState(props.allBlogs);

  return (
    <>
      <Head>
        <title>HuntingCoder | Blogs</title>
      </Head>
      <div className={styles.cardRow}>
        {blogs &&
          blogs.map((val) => (
            <div key={val._id} className={styles.card}>
              {val.image && (
                <Image
                  className={styles.thumbnails}
                  width={500}
                  height={300}
                  src={val.image}
                  alt={val.title}
                  priority
                />
              )}
              <div className={styles.cardBody}>
                {val.title && (
                  <h3>
                    <Link href={`/blog/${val.title.split(" ").join("-")}`}>
                      {val.title}
                    </Link>
                  </h3>
                )}
                {val.content && (
                  <p>
                    {val.content.slice(0, 80)}
                    {val.content.length > 80 && "..."}
                  </p>
                )}
                <Link
                  className="btn mt-25"
                  href={`/blog/${val?.title?.split(" ").join("-")}`}
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const requestBlog = await axios("http://localhost:5000/blogs");
  const allBlogs = requestBlog.data;
  return {
    props: { allBlogs },
  };
}

export default BlogPage;
