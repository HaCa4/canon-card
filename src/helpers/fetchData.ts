import axios from "axios";
import { Post } from "../modals/Content";

export const fetchCardContent = async (
  setterFunction: React.Dispatch<React.SetStateAction<Post[] | undefined>>
) => {
  const res = await axios.get(
    "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
  );
  setterFunction(res.data);
};
