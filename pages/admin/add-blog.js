import axios from "axios";
import React, { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      content: content,
    };
    if (title && content) {
      try {
        axios.post("http://localhost:5000/addblog", data);
      } catch (error) {
        console.log("some error");
      }
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={titleHandler} type="text" placeholder="title" />
        <textarea
          onChange={contentHandler}
          type="text"
          placeholder="Description"
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddBlog;
