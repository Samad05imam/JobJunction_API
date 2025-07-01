import DataUriParser from "datauri/parser.js"

import path from "path";

export const getDataUri = (file) => {
  if (!file) throw new Error("No file provided to getDataUri");

  const extName = path.extname(file.originalname);
  return `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
};


export default getDataUri;