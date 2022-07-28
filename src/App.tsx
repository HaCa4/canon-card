import { useEffect, useState } from "react";
import BlogPostCard from "./components/BlogPostCard";
import LoadingCard from "./components/LoadingCard";
import { fetchCardContent } from "./helpers/fetchData";
import { Post } from "./modals/Content";

const App: React.FC = () => {
  const [postList, setPostList] = useState<Post[]>();
  useEffect(() => {
    fetchCardContent(setPostList);
    console.log(postList);
  }, []);

  if (postList?.length === 0) {
    return (
      <div className="u-align--center u-vertically-center ">
        <LoadingCard />
      </div>
    );
  }
  return (
    <div className="u-vertically-center ">
      <div className="p-grid row">
        {postList?.map((post) => (
          <BlogPostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
