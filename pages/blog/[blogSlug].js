import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import styles from "../../styles/Blog.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogDetail = (props) => {
  const [blog] = useState(props.blog);

  return (
    <>
      <Head>
        <title>HuntingCoder | {blog.title}</title>
      </Head>
      <div className={`${styles.blogDetails} py-80`}>
        <Link href={"/blog"}>{"<< Go Back"}</Link>
        {blog.title && <h2 className="mt-25">{blog.title}</h2>}
        {blog.image && (
          <Image
            className={`${styles.thumbnails} mt-25`}
            width={500}
            height={300}
            src={blog.image}
            alt={blog.title}
            priority
          />
        )}
        <div className={`d-flex justify-content-between ${styles.textCap}`}>
          {blog.date && (
            <span>
              <b>Published on:</b> {blog.date}
            </span>
          )}
          {blog.author && (
            <span>
              <b>Author:</b> {blog.author}
            </span>
          )}
        </div>
        <div className={`d-flex justify-content-between ${styles.textCap}`}>
          {blog.tags && (
            <span>
              <b>Tags:</b> {blog.tags.toString().split(",").join(", ")}.
            </span>
          )}
          {blog.categories && (
            <span>
              <b>Categories:</b>{" "}
              {blog.categories.toString().split(",").join(", ")}.
            </span>
          )}
        </div>
        {blog.content && <p className="mt-25">{blog.content}</p>}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const requestBlog = await axios(
    `http://localhost:5000/blog?slug=${context.query.blogSlug}`
  );
  const blog = requestBlog.data[0];
  return {
    props: { blog },
  };
}

export default BlogDetail;
