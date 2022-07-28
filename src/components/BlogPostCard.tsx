import { Post } from "../modals/Content";

export type BlogPostCardProps = {
  post: Post;
};
const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="p-card col-4">
      <h3 className="p-heading--5">CLOUD AND SERVER</h3>
      <hr className="u-sv1" />
      <div className="p-card__content">
        <img className="p-card__image" alt="" src={post.featured_media} />
        <a href={post.link}>
          <h4 className="p-heading--4 ">{post.title?.rendered}</h4>
        </a>
        <h6 className="p-heading--5">
          <i>
            By {""}
            <a href={(post as any)["_embedded"].author[0].link}>
              {(post as any)["_embedded"].author[0].name}
            </a>
            {""} on 27 November 2018
          </i>
        </h6>
        <hr className="u-sv2" />
        <p className="u-no-padding--bottom">Article</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
