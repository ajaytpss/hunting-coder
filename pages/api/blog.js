import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile("blogdata/data.json", "utf-8", (err, data) => {
    if (!err) {
      const slug = req.query.slug.split("-").join(" ");
      const findBlog = JSON.parse(data).filter((val) => val.title === slug);
      if (findBlog.length > 0) {
        return res.status(200).json(findBlog);
      } else {
        return res.status(200).json("No blog found!");
      }
    } else {
      return res.status(200).json({ error: err });
    }
  });
}
