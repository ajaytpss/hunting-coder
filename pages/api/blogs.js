import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile("blogdata/data.json", "utf-8", (err, data) => {
    if (!err) res.status(200).json(JSON.parse(data));
    else res.status(200).json({ error: err });
  });
}
