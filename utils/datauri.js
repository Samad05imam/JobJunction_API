import DataUriParser from "datauri/parser.js";
import path from "path";

const parser = new DataUriParser();

export const getDataUri = (file) => {
  if (!file) throw new Error("No file provided to getDataUri");

  const extName = path.extname(file.originalname);
  return parser.format(extName, file.buffer).content;
};

export default getDataUri;
