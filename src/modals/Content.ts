export type Post = {
  author?: number;
  categories?: number[];
  comment_status?: string;
  content?: {
    protected?: boolean;
    rendered?: string;
  };
  date?: string;
  date_gmt?: string;
  excerpt?: {
    protected?: boolean;
    rendered?: string;
  };
  featured_media?: string;
  format?: string;
  group?: number[];
  guid?: {
    rendered?: string;
  };
  id?: number;
  link?: string;
  meta?: any[];
  modified?: string;
  modified_gmt?: string;
  ping_status?: string;
  status?: string;
  sticky?: false;
  tags?: number[];
  template?: string;
  title?: {
    rendered?: string;
  };
  topic?: number[];
  type?: string;
};
