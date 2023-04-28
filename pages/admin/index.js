import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link href={"/admin/add-blog"}>Add blog</Link>
    </div>
  );
};

export default Dashboard;
